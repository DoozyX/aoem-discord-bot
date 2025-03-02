# .GuildsApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**guildsControllerCreateV1**](GuildsApi.md#guildsControllerCreateV1) | **POST** /api/v1/guilds | 
[**guildsControllerFindAllV1**](GuildsApi.md#guildsControllerFindAllV1) | **GET** /api/v1/guilds | 


# **guildsControllerCreateV1**
> Guild guildsControllerCreateV1(createGuildDto)


### Example


```typescript
import { createConfiguration, GuildsApi } from '';
import type { GuildsApiGuildsControllerCreateV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new GuildsApi(configuration);

const request: GuildsApiGuildsControllerCreateV1Request = {
  
  createGuildDto: {
    uid: "uid_example",
    name: "name_example",
  },
};

const data = await apiInstance.guildsControllerCreateV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGuildDto** | **CreateGuildDto**|  |


### Return type

**Guild**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create a guild |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **guildsControllerFindAllV1**
> Array<Guild> guildsControllerFindAllV1()


### Example


```typescript
import { createConfiguration, GuildsApi } from '';

const configuration = createConfiguration();
const apiInstance = new GuildsApi(configuration);

const request = {};

const data = await apiInstance.guildsControllerFindAllV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Guild>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of guild |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


