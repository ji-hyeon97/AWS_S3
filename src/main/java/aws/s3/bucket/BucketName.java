package aws.s3.bucket;

public enum BucketName {

    PROFILE_IMAGE("seojihyeon");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
