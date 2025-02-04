# .ChannelsApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channelsControllerCreate**](ChannelsApi.md#channelsControllerCreate) | **POST** /api/v1/channels | 


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


