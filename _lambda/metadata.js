import members from '../src/data/members';

exports.handler = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      members
    })
  })
}