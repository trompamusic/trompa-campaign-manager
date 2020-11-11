import AWS from 'aws-sdk';

const bucketName     = process.env.REACT_APP_AWS_SDK_BUCKET_NAME;
const bucketRegion   = process.env.REACT_APP_AWS_SDK_BUCKET_REGION;
const IdentityPoolId = process.env.REACT_APP_AWS_SDK_IDENTITY_POOL_ID;
const folder         = process.env.REACT_APP_AWS_SDK_FOLDER;

export const initializeUpload = () => {
  AWS.config.update({ region: bucketRegion, credentials: new AWS.CognitoIdentityCredentials({ IdentityPoolId: IdentityPoolId }) });
  new AWS.S3({ apiVersion: "2006-03-01", params: { Bucket: bucketName } });
};

export const upload = file => {
  const fileName  = file.name;
  const folderKey = encodeURIComponent(folder) + "/";
  const fileKey   = folderKey + fileName;

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucketName,
      Key   : fileKey,
      Body  : file,
    },
  });

  const promise = upload.promise();

  return promise.then(
    function(data) {
      return data.Location;
    },
    function(err) {
      return alert("There was an error uploading your file: ", err.message);
    },
  );
};
