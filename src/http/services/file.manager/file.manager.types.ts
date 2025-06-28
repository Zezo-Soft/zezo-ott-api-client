export interface IListFilesQuery {
  bucket?: string;
  prefix?: string;
  delimiter?: string;
  maxKeys?: number;
}

export type IsTruncated = boolean;
export type ObjectList = {
  Key: string;
  LastModified: string;
  ETag: string;
  ChecksumAlgorithm: Array<unknown>;
  Size: number;
  StorageClass: string;
};
export type BucketName = string;
export type Prefix = string;
export type Delimiter = string;
export type MaxKeys = number;

export interface CommonPrefix {
  /**
   * Container for the specified common prefix.
   */
  Prefix?: Prefix;
}
export type CommonPrefixList = CommonPrefix[];
export type EncodingType = "url" | string;
export type KeyCount = number;
export type Token = string;
export type NextToken = string;
export type StartAfter = string;
export type RequestCharged = "requester" | string;

export interface ListObjectsOutput {
  /**
   * Set to false if all of the results were returned. Set to true if more keys are available to return. If the number of results exceeds that specified by MaxKeys, all of the results might not be returned.
   */
  IsTruncated?: IsTruncated;
  /**
   * Metadata about each object returned.
   */
  Contents?: ObjectList[];
  /**
   * The bucket name.
   */
  Name?: BucketName;
  /**
   * Keys that begin with the indicated prefix.   Directory buckets - For directory buckets, only prefixes that end in a delimiter (/) are supported.
   */
  Prefix?: Prefix;
  /**
   * Causes keys that contain the same string between the prefix and the first occurrence of the delimiter to be rolled up into a single result element in the CommonPrefixes collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up result counts as only one return against the MaxKeys value.   Directory buckets - For directory buckets, / is the only supported delimiter.
   */
  Delimiter?: Delimiter;
  /**
   * Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more.
   */
  MaxKeys?: MaxKeys;
  /**
   * All of the keys (up to 1,000) that share the same prefix are grouped together. When counting the total numbers of returns by this API operation, this group of keys is considered as one item. A response can contain CommonPrefixes only if you specify a delimiter.  CommonPrefixes contains all (if there are any) keys between Prefix and the next occurrence of the string specified by a delimiter.  CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. All of the keys that roll up into a common prefix count as a single return when calculating the number of returns.      Directory buckets - For directory buckets, only prefixes that end in a delimiter (/) are supported.    Directory buckets  - When you query ListObjectsV2 with a delimiter during in-progress multipart uploads, the CommonPrefixes response parameter contains the prefixes that are associated with the in-progress multipart uploads. For more information about multipart uploads, see Multipart Upload Overview in the Amazon S3 User Guide.
   */
  CommonPrefixes?: CommonPrefixList;
  /**
   * Encoding type used by Amazon S3 to encode object key names in the XML response. If you specify the encoding-type request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:  Delimiter, Prefix, Key, and StartAfter.
   */
  EncodingType?: EncodingType;
  /**
   *  KeyCount is the number of keys returned with this request. KeyCount will always be less than or equal to the MaxKeys field. For example, if you ask for 50 keys, your result will include 50 keys or fewer.
   */
  KeyCount?: KeyCount;
  /**
   *  If ContinuationToken was sent with the request, it is included in the response. You can use the returned ContinuationToken for pagination of the list response. You can use this ContinuationToken for pagination of the list results.
   */
  ContinuationToken?: Token;
  /**
   *  NextContinuationToken is sent when isTruncated is true, which means there are more keys in the bucket that can be listed. The next list requests to Amazon S3 can be continued with this NextContinuationToken. NextContinuationToken is obfuscated and is not a real key
   */
  NextContinuationToken?: NextToken;
  /**
   * If StartAfter was sent with the request, it is included in the response.  This functionality is not supported for directory buckets.
   */
  StartAfter?: StartAfter;
  RequestCharged?: RequestCharged;

  CloudfrontUrl?: string;
  Region?: string;
  Provider?: string;
}

export interface ICreateFolder {
  bucket?: string;
  key?: string;
  folderName: string;
}

export interface IFileDelete {
  bucket?: string;
  keys: string[];
}

export interface IMultiPartResponse {
  UploadId: string;
  Key: string;
  Bucket: string;
}

export interface IGetMultiPart {
  file_key: string;
  upload_id: string;
  parts?: number;
  part_number?: number;
  all_parts_uploaded?: boolean;
}

export interface IGetMultiPartResponse {
  signedUrl: string;
  PartNumber: number;
}

export interface IFinalizeMultipartUpload {
  file_key: string;
  upload_id: string;
  parts: {
    PartNumber: number;
    ETag?: string;
  }[];
  payload?: {
    name: string;
  };
}
