# .FilesApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesLocalControllerUploadFileV1**](FilesApi.md#filesLocalControllerUploadFileV1) | **POST** /api/v1/files/upload | 


# **filesLocalControllerUploadFileV1**
> FileType filesLocalControllerUploadFileV1()


### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiFilesLocalControllerUploadFileV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiFilesLocalControllerUploadFileV1Request = {
  
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.filesLocalControllerUploadFileV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**FileType**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | File uploaded |  -  |
**422** | Missing file |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


