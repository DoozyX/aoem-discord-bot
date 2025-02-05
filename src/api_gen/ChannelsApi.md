# .ChannelsApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channelsControllerCreate**](ChannelsApi.md#channelsControllerCreate) | **POST** /api/v1/channels | 
[**channelsControllerFindOne**](ChannelsApi.md#channelsControllerFindOne) | **GET** /api/v1/channels/{guildUid}/{type} | 


# **channelsControllerCreate**
> Channel channelsControllerCreate(createChannelDto)


### Example


```typescript
import { createConfiguration, ChannelsApi } from '';
import type { ChannelsApiChannelsControllerCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ChannelsApi(configuration);

const request: ChannelsApiChannelsControllerCreateRequest = {
  
  createChannelDto: {
    uid: "uid_example",
    guildUid: "guildUid_example",
    type: "construction",
  },
};

const data = await apiInstance.channelsControllerCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createChannelDto** | **CreateChannelDto**|  |


### Return type

**Channel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create a channel |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelsControllerFindOne**
> Channel channelsControllerFindOne()


### Example


```typescript
import { createConfiguration, ChannelsApi } from '';
import type { ChannelsApiChannelsControllerFindOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ChannelsApi(configuration);

const request: ChannelsApiChannelsControllerFindOneRequest = {
  
  guildUid: "guildUid_example",
  
  type: "construction",
};

const data = await apiInstance.channelsControllerFindOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildUid** | [**string**] |  | defaults to undefined
 **type** | [**&#39;construction&#39; | &#39;research&#39; | &#39;training&#39;**]**Array<&#39;construction&#39; &#124; &#39;research&#39; &#124; &#39;training&#39;>** |  | defaults to undefined


### Return type

**Channel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the channel if exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


