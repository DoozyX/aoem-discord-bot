# .UsersApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersControllerActivateV1**](UsersApi.md#usersControllerActivateV1) | **PATCH** /api/v1/users/{id}/activate | 
[**usersControllerCreateIndividualV1**](UsersApi.md#usersControllerCreateIndividualV1) | **POST** /api/v1/users/individual | 
[**usersControllerCreateV1**](UsersApi.md#usersControllerCreateV1) | **POST** /api/v1/users | 
[**usersControllerFindAllV1**](UsersApi.md#usersControllerFindAllV1) | **POST** /api/v1/users/all | 
[**usersControllerFindOneV1**](UsersApi.md#usersControllerFindOneV1) | **GET** /api/v1/users/{id} | 
[**usersControllerStatisticsV1**](UsersApi.md#usersControllerStatisticsV1) | **GET** /api/v1/users/statistics | 
[**usersControllerUpdateV1**](UsersApi.md#usersControllerUpdateV1) | **PATCH** /api/v1/users/{id} | 


# **usersControllerActivateV1**
> User usersControllerActivateV1(activateUserDto)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersControllerActivateV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersControllerActivateV1Request = {
  
  id: "id_example",
  
  activateUserDto: {
    status: "inactive",
    statusReason: "statusReason_example",
  },
};

const data = await apiInstance.usersControllerActivateV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activateUserDto** | **ActivateUserDto**|  |
 **id** | [**string**] |  | defaults to undefined


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
**200** | The record has been successfully updated. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersControllerCreateIndividualV1**
> User usersControllerCreateIndividualV1(createIndividualUserDto)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersControllerCreateIndividualV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersControllerCreateIndividualV1Request = {
  
  createIndividualUserDto: {
    email: "email_example",
    password: "password_example",
    role: "user",
    status: "inactive",
    language: "en",
  },
};

const data = await apiInstance.usersControllerCreateIndividualV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createIndividualUserDto** | **CreateIndividualUserDto**|  |


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
**201** | The record has been successfully created. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersControllerCreateV1**
> User usersControllerCreateV1(createUserDto)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersControllerCreateV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersControllerCreateV1Request = {
  
  createUserDto: {
    email: "email_example",
    password: "password_example",
    role: "user",
    status: "inactive",
    language: "en",
  },
};

const data = await apiInstance.usersControllerCreateV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserDto** | **CreateUserDto**|  |


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
**201** | The record has been successfully created. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersControllerFindAllV1**
> UsersControllerFindAllV1200Response usersControllerFindAllV1(queryUserDto)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersControllerFindAllV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersControllerFindAllV1Request = {
  
  queryUserDto: {
    page: 1,
    limit: 10,
    filter: {
      roles: [
        "user",
      ],
      statuses: [
        "inactive",
      ],
      email: "email_example",
    },
    sort: [
      {
        orderBy: "email",
        order: "ASC",
      },
    ],
  },
};

const data = await apiInstance.usersControllerFindAllV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryUserDto** | **QueryUserDto**|  |


### Return type

**UsersControllerFindAllV1200Response**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersControllerFindOneV1**
> User usersControllerFindOneV1()


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersControllerFindOneV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersControllerFindOneV1Request = {
  
  id: "id_example",
};

const data = await apiInstance.usersControllerFindOneV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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
**200** | Returns the user if exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersControllerStatisticsV1**
> UserStatistics usersControllerStatisticsV1()


### Example


```typescript
import { createConfiguration, UsersApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request = {};

const data = await apiInstance.usersControllerStatisticsV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserStatistics**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersControllerUpdateV1**
> User usersControllerUpdateV1(updateUserDto)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersControllerUpdateV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersControllerUpdateV1Request = {
  
  id: "id_example",
  
  updateUserDto: {
    email: "test1@doozyx.com",
    password: "password_example",
    role: "user",
    status: "inactive",
    language: "en",
    statusReason: "statusReason_example",
  },
};

const data = await apiInstance.usersControllerUpdateV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserDto** | **UpdateUserDto**|  |
 **id** | [**string**] |  | defaults to undefined


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
**200** | The record has been successfully updated. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


