# .AuthApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerConfirmEmailV1**](AuthApi.md#authControllerConfirmEmailV1) | **POST** /api/v1/auth/email/confirm | 
[**authControllerForgotPasswordV1**](AuthApi.md#authControllerForgotPasswordV1) | **POST** /api/v1/auth/forgot/password | 
[**authControllerLoginV1**](AuthApi.md#authControllerLoginV1) | **POST** /api/v1/auth/email/login | 
[**authControllerLogoutV1**](AuthApi.md#authControllerLogoutV1) | **POST** /api/v1/auth/logout | 
[**authControllerMeV1**](AuthApi.md#authControllerMeV1) | **GET** /api/v1/auth/me | 
[**authControllerRefreshV1**](AuthApi.md#authControllerRefreshV1) | **POST** /api/v1/auth/refresh | 
[**authControllerRegisterV1**](AuthApi.md#authControllerRegisterV1) | **POST** /api/v1/auth/email/register | 
[**authControllerResendVerifyMailV1**](AuthApi.md#authControllerResendVerifyMailV1) | **POST** /api/v1/auth/email/resend-verify-mail | 
[**authControllerResetPasswordV1**](AuthApi.md#authControllerResetPasswordV1) | **POST** /api/v1/auth/reset/password | 
[**authControllerUpdateV1**](AuthApi.md#authControllerUpdateV1) | **PATCH** /api/v1/auth/me | 


# **authControllerConfirmEmailV1**
> void authControllerConfirmEmailV1(authConfirmEmailDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerConfirmEmailV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerConfirmEmailV1Request = {
  
  authConfirmEmailDto: {
    hash: "hash_example",
  },
};

const data = await apiInstance.authControllerConfirmEmailV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authConfirmEmailDto** | **AuthConfirmEmailDto**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User confirmed successfully |  -  |
**401** | Invalid token |  -  |
**404** | Invalid user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerForgotPasswordV1**
> void authControllerForgotPasswordV1(authForgotPasswordDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerForgotPasswordV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerForgotPasswordV1Request = {
  
  authForgotPasswordDto: {
    email: "email_example",
  },
};

const data = await apiInstance.authControllerForgotPasswordV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authForgotPasswordDto** | **AuthForgotPasswordDto**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Forgot request sent successfully |  -  |
**404** | Invalid user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerLoginV1**
> LoginResponseType authControllerLoginV1(authEmailLoginDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerLoginV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerLoginV1Request = {
  
  authEmailLoginDto: {
    email: "user@doozyx.com",
    password: "password_example",
  },
};

const data = await apiInstance.authControllerLoginV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authEmailLoginDto** | **AuthEmailLoginDto**|  |


### Return type

**LoginResponseType**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Login successful |  -  |
**401** | Invalid password |  -  |
**404** | Invalid email |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerLogoutV1**
> void authControllerLogoutV1()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerLogoutV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Logout successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerMeV1**
> User authControllerMeV1()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerMeV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current user information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerRefreshV1**
> RefreshResponseType authControllerRefreshV1()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerRefreshV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**RefreshResponseType**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token refreshed successfully |  -  |
**401** | Invalid token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerRegisterV1**
> void authControllerRegisterV1(authRegisterLoginDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerRegisterV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerRegisterV1Request = {
  
  authRegisterLoginDto: {
    email: "user@doozyx.com",
    password: "password_example",
    language: "en",
  },
};

const data = await apiInstance.authControllerRegisterV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authRegisterLoginDto** | **AuthRegisterLoginDto**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User registered successfully |  -  |
**422** | Email already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerResendVerifyMailV1**
> void authControllerResendVerifyMailV1()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerResendVerifyMailV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Email sent successfully |  -  |
**422** | Invalid State |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerResetPasswordV1**
> void authControllerResetPasswordV1(authResetPasswordDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerResetPasswordV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerResetPasswordV1Request = {
  
  authResetPasswordDto: {
    password: "password_example",
    hash: "hash_example",
  },
};

const data = await apiInstance.authControllerResetPasswordV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authResetPasswordDto** | **AuthResetPasswordDto**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Password reset successfully |  -  |
**401** | Invalid token |  -  |
**404** | Invalid user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerUpdateV1**
> User authControllerUpdateV1(authUpdateDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerUpdateV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerUpdateV1Request = {
  
  authUpdateDto: {
    password: "password_example",
    oldPassword: "oldPassword_example",
  },
};

const data = await apiInstance.authControllerUpdateV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authUpdateDto** | **AuthUpdateDto**|  |


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User information updated successfully |  -  |
**422** | Email already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


