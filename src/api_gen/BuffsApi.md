# .BuffsApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buffsControllerCreateV1**](BuffsApi.md#buffsControllerCreateV1) | **POST** /api/v1/buffs | 
[**buffsControllerFindAllV1**](BuffsApi.md#buffsControllerFindAllV1) | **PATCH** /api/v1/buffs/{guildUid}/{type} | 
[**buffsControllerRemoveAtV1**](BuffsApi.md#buffsControllerRemoveAtV1) | **DELETE** /api/v1/buffs/{guildUid}/{type}/{position} | 
[**buffsControllerRemoveFirstV1**](BuffsApi.md#buffsControllerRemoveFirstV1) | **DELETE** /api/v1/buffs/{guildUid}/{type} | 


# **buffsControllerCreateV1**
> Buff buffsControllerCreateV1(createBuffDto)


### Example


```typescript
import { createConfiguration, BuffsApi } from '';
import type { BuffsApiBuffsControllerCreateV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new BuffsApi(configuration);

const request: BuffsApiBuffsControllerCreateV1Request = {
  
  createBuffDto: {
    guildUid: "guildUid_example",
    type: "construction",
    member: "member_example",
  },
};

const data = await apiInstance.buffsControllerCreateV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBuffDto** | **CreateBuffDto**|  |


### Return type

**Buff**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create a buff |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buffsControllerFindAllV1**
> Array<Buff> buffsControllerFindAllV1()


### Example


```typescript
import { createConfiguration, BuffsApi } from '';
import type { BuffsApiBuffsControllerFindAllV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new BuffsApi(configuration);

const request: BuffsApiBuffsControllerFindAllV1Request = {
  
  guildUid: "guildUid_example",
  
  type: "construction",
};

const data = await apiInstance.buffsControllerFindAllV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildUid** | [**string**] |  | defaults to undefined
 **type** | [**&#39;construction&#39; | &#39;research&#39; | &#39;training&#39;**]**Array<&#39;construction&#39; &#124; &#39;research&#39; &#124; &#39;training&#39;>** |  | defaults to undefined


### Return type

**Array<Buff>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The record has been successfully updated. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buffsControllerRemoveAtV1**
> Buff buffsControllerRemoveAtV1()


### Example


```typescript
import { createConfiguration, BuffsApi } from '';
import type { BuffsApiBuffsControllerRemoveAtV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new BuffsApi(configuration);

const request: BuffsApiBuffsControllerRemoveAtV1Request = {
  
  guildUid: "guildUid_example",
  
  type: "construction",
  
  position: 3.14,
};

const data = await apiInstance.buffsControllerRemoveAtV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildUid** | [**string**] |  | defaults to undefined
 **type** | [**&#39;construction&#39; | &#39;research&#39; | &#39;training&#39;**]**Array<&#39;construction&#39; &#124; &#39;research&#39; &#124; &#39;training&#39;>** |  | defaults to undefined
 **position** | [**number**] |  | defaults to undefined


### Return type

**Buff**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The removed buff. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buffsControllerRemoveFirstV1**
> Buff buffsControllerRemoveFirstV1()


### Example


```typescript
import { createConfiguration, BuffsApi } from '';
import type { BuffsApiBuffsControllerRemoveFirstV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new BuffsApi(configuration);

const request: BuffsApiBuffsControllerRemoveFirstV1Request = {
  
  guildUid: "guildUid_example",
  
  type: "construction",
};

const data = await apiInstance.buffsControllerRemoveFirstV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildUid** | [**string**] |  | defaults to undefined
 **type** | [**&#39;construction&#39; | &#39;research&#39; | &#39;training&#39;**]**Array<&#39;construction&#39; &#124; &#39;research&#39; &#124; &#39;training&#39;>** |  | defaults to undefined


### Return type

**Buff**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The removed buff. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


