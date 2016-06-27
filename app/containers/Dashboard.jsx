import React from 'react';
import ReactS3Uploader from 'react-s3-uploader';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Dashboard = () => <div>
  <ReactS3Uploader
    signingUrl="/s3/sign"
    accept="audio/ogg"
    uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}
    />
</div>;

export default Dashboard;
