# .AuthApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerConfirmEmail**](AuthApi.md#authControllerConfirmEmail) | **POST** /api/v1/auth/email/confirm | 
[**authControllerForgotPassword**](AuthApi.md#authControllerForgotPassword) | **POST** /api/v1/auth/forgot/password | 
[**authControllerLogin**](AuthApi.md#authControllerLogin) | **POST** /api/v1/auth/email/login | 
[**authControllerLogout**](AuthApi.md#authControllerLogout) | **POST** /api/v1/auth/logout | 
[**authControllerMe**](AuthApi.md#authControllerMe) | **GET** /api/v1/auth/me | 
[**authControllerRefresh**](AuthApi.md#authControllerRefresh) | **POST** /api/v1/auth/refresh | 
[**authControllerRegister**](AuthApi.md#authControllerRegister) | **POST** /api/v1/auth/email/register | 
[**authControllerResendVerifyMail**](AuthApi.md#authControllerResendVerifyMail) | **POST** /api/v1/auth/email/resend-verify-mail | 
[**authControllerResetPassword**](AuthApi.md#authControllerResetPassword) | **POST** /api/v1/auth/reset/password | 
[**authControllerUpdate**](AuthApi.md#authControllerUpdate) | **PATCH** /api/v1/auth/me | 


# **authControllerConfirmEmail**
> void authControllerConfirmEmail(authConfirmEmailDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerConfirmEmailRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerConfirmEmailRequest = {
  
  authConfirmEmailDto: {
    hash: "hash_example",
  },
};

const data = await apiInstance.authControllerConfirmEmail(request);
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

# **authControllerForgotPassword**
> void authControllerForgotPassword(authForgotPasswordDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerForgotPasswordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerForgotPasswordRequest = {
  
  authForgotPasswordDto: {
    email: "email_example",
  },
};

const data = await apiInstance.authControllerForgotPassword(request);
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

# **authControllerLogin**
> LoginResponseType authControllerLogin(authEmailLoginDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerLoginRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerLoginRequest = {
  
  authEmailLoginDto: {
    email: "user@doozyx.com",
    password: "password_example",
  },
};

const data = await apiInstance.authControllerLogin(request);
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

# **authControllerLogout**
> void authControllerLogout()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerLogout(request);
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

# **authControllerMe**
> User authControllerMe()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerMe(request);
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

# **authControllerRefresh**
> RefreshResponseType authControllerRefresh()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerRefresh(request);
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

# **authControllerRegister**
> void authControllerRegister(authRegisterLoginDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerRegisterRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerRegisterRequest = {
  
  authRegisterLoginDto: {
    email: "user@doozyx.com",
    password: "password_example",
    language: "en",
  },
};

const data = await apiInstance.authControllerRegister(request);
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

# **authControllerResendVerifyMail**
> void authControllerResendVerifyMail()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerResendVerifyMail(request);
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

# **authControllerResetPassword**
> void authControllerResetPassword(authResetPasswordDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerResetPasswordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerResetPasswordRequest = {
  
  authResetPasswordDto: {
    password: "password_example",
    hash: "hash_example",
  },
};

const data = await apiInstance.authControllerResetPassword(request);
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

# **authControllerUpdate**
> User authControllerUpdate(authUpdateDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerUpdateRequest = {
  
  authUpdateDto: {
    password: "password_example",
    oldPassword: "oldPassword_example",
  },
};

const data = await apiInstance.authControllerUpdate(request);
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


