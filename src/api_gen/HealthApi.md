# .HealthApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthControllerCheck**](HealthApi.md#healthControllerCheck) | **GET** /api/v1/health | 


# **healthControllerCheck**
> HealthControllerCheck200Response healthControllerCheck()


### Example


```typescript
import { createConfiguration, HealthApi } from '';

const configuration = createConfiguration();
const apiInstance = new HealthApi(configuration);

const request = {};

const data = await apiInstance.healthControllerCheck(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**HealthControllerCheck200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Health Check is successful |  -  |
**503** | The Health Check is not successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


