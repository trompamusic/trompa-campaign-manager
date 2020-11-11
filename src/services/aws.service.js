import S3 from 'aws-sdk/clients/s3';
import { config, CognitoIdentityCredentials } from 'aws-sdk/global';

const bucketName     = process.env.REACT_APP_AWS_SDK_BUCKET_NAME;
const bucketRegion   = process.env.REACT_APP_AWS_SDK_BUCKET_REGION;
const IdentityPoolId = process.env.REACT_APP_AWS_SDK_IDENTITY_POOL_ID;
const folder         = process.env.REACT_APP_AWS_SDK_FOLDER;

export const initializeUpload = () => {
  config.update({ region: bucketRegion, credentials: new CognitoIdentityCredentials({ IdentityPoolId: IdentityPoolId }) });
  new S3({ apiVersion: "2006-03-01", params: { Bucket: bucketName } });
};

export const upload = file => {
  const fileName  = file.name;
  const folderKey = encodeURIComponent(folder) + "/";
  const fileKey   = folderKey + fileName;

  const upload = new S3.ManagedUpload({
    params: {
      Bucket: bucketName,
      Key   : fileKey,
      Body  : file,
    },
  });

  const promise = upload.promise();

  return promise.then(
    function(data) {
      const amazonUrl = data.Location;

      return amazonUrl.replace("https://trompa-upload.s3.eu-west-1.amazonaws.com/upload/", "https://files.trompamusic.eu/");
    },
    function(err) {
      return alert("There was an error uploading your file: ", err.message);
    },
  );
};
