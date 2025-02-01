import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, RequestHandler, Response } from 'express';

export function mapClass(cls: ClassConstructor<object>): RequestHandler {
    return async (request: Request, response: Response, next: NextFunction) => {
        // Map to class
        let object: object = plainToInstance(cls, request.body);

        // Validate class
        let errors = await validate(object, {
            skipMissingProperties: true,
            whitelist: true,
            forbidNonWhitelisted: false,
            forbidUnknownValues: true,
        });
        if (errors.length > 0) {
            response.status(400).send({ error: true, errors: formatValidationErrors(errors) });
            return;
        }

        // Set validated class to locals
        response.locals.input = object;
        next();
    };
}

interface ValidationErrorLog {
    property: string;
    constraints?: { [type: string]: string };
    children?: ValidationErrorLog[];
}

function formatValidationErrors(errors: ValidationError[]): ValidationErrorLog[] {
    return errors.map(error => ({
        property: error.property,
        constraints: error.constraints,
        children: error.children?.length > 0 ? formatValidationErrors(error.children) : undefined,
    }));
}
