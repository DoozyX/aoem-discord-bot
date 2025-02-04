# .GuildsApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**guildsControllerCreate**](GuildsApi.md#guildsControllerCreate) | **POST** /api/v1/guilds | 
[**guildsControllerFindAll**](GuildsApi.md#guildsControllerFindAll) | **GET** /api/v1/guilds | 


# **guildsControllerCreate**
> Guild guildsControllerCreate(createGuildDto)


### Example


```typescript
import { createConfiguration, GuildsApi } from '';
import type { GuildsApiGuildsControllerCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GuildsApi(configuration);

const request: GuildsApiGuildsControllerCreateRequest = {
  
  createGuildDto: {
    uid: "uid_example",
    name: "name_example",
  },
};

const data = await apiInstance.guildsControllerCreate(request);
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

# **guildsControllerFindAll**
> Array<Guild> guildsControllerFindAll()


### Example


```typescript
import { createConfiguration, GuildsApi } from '';

const configuration = createConfiguration();
const apiInstance = new GuildsApi(configuration);

const request = {};

const data = await apiInstance.guildsControllerFindAll(request);
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


