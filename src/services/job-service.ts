import parser from 'cron-parser';
import { DateTime } from 'luxon';
import schedule from 'node-schedule';

import { Logs } from '@app/intl';
import { Job } from '@app/jobs';

import { Logger } from '.';

export class JobService {
    constructor(private jobs: Job[]) {}

    public start(): void {
        for (let job of this.jobs) {
            let jobSchedule = job.runOnce
                ? parser
                      .parseExpression(job.schedule, {
                          currentDate: DateTime.now()
                              .plus({ seconds: job.initialDelaySecs })
                              .toJSDate(),
                      })
                      .next()
                      .toDate()
                : {
                      start: DateTime.now().plus({ seconds: job.initialDelaySecs }).toJSDate(),
                      rule: job.schedule,
                  };

            schedule.scheduleJob(jobSchedule, async () => {
                try {
                    if (job.log) {
                        Logger.info(Logs.info.jobRun.replaceAll('{JOB}', job.name));
                    }

                    await job.run();

                    if (job.log) {
                        Logger.info(Logs.info.jobCompleted.replaceAll('{JOB}', job.name));
                    }
                } catch (error) {
                    Logger.error(Logs.error.job.replaceAll('{JOB}', job.name), error);
                }
            });
            Logger.info(
                Logs.info.jobScheduled
                    .replaceAll('{JOB}', job.name)
                    .replaceAll('{SCHEDULE}', job.schedule)
            );
        }
    }
}
