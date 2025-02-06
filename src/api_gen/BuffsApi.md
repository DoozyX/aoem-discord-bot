# .BuffsApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buffsControllerCreate**](BuffsApi.md#buffsControllerCreate) | **POST** /api/v1/buffs | 
[**buffsControllerFindAll**](BuffsApi.md#buffsControllerFindAll) | **PATCH** /api/v1/buffs/{guildUid}/{type} | 
[**buffsControllerRemoveAt**](BuffsApi.md#buffsControllerRemoveAt) | **DELETE** /api/v1/buffs/{guildUid}/{type}/{position} | 
[**buffsControllerRemoveFirst**](BuffsApi.md#buffsControllerRemoveFirst) | **DELETE** /api/v1/buffs/{guildUid}/{type} | 


# **buffsControllerCreate**
> Buff buffsControllerCreate(createBuffDto)


### Example


```typescript
import { createConfiguration, BuffsApi } from '';
import type { BuffsApiBuffsControllerCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuffsApi(configuration);

const request: BuffsApiBuffsControllerCreateRequest = {
  
  createBuffDto: {
    guildUid: "guildUid_example",
    type: "construction",
    member: "member_example",
  },
};

const data = await apiInstance.buffsControllerCreate(request);
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

# **buffsControllerFindAll**
> Array<Buff> buffsControllerFindAll()


### Example


```typescript
import { createConfiguration, BuffsApi } from '';
import type { BuffsApiBuffsControllerFindAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuffsApi(configuration);

const request: BuffsApiBuffsControllerFindAllRequest = {
  
  guildUid: "guildUid_example",
  
  type: "construction",
};

const data = await apiInstance.buffsControllerFindAll(request);
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

# **buffsControllerRemoveAt**
> Buff buffsControllerRemoveAt()


### Example


```typescript
import { createConfiguration, BuffsApi } from '';
import type { BuffsApiBuffsControllerRemoveAtRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuffsApi(configuration);

const request: BuffsApiBuffsControllerRemoveAtRequest = {
  
  guildUid: "guildUid_example",
  
  type: "construction",
  
  position: 3.14,
};

const data = await apiInstance.buffsControllerRemoveAt(request);
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

# **buffsControllerRemoveFirst**
> Buff buffsControllerRemoveFirst()


### Example


```typescript
import { createConfiguration, BuffsApi } from '';
import type { BuffsApiBuffsControllerRemoveFirstRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuffsApi(configuration);

const request: BuffsApiBuffsControllerRemoveFirstRequest = {
  
  guildUid: "guildUid_example",
  
  type: "construction",
};

const data = await apiInstance.buffsControllerRemoveFirst(request);
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


