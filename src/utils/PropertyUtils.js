// ******************************************************
// Application Properties Util
// *********************getProperty*********************************

export function getProperty (targetProperty) {
  let property = '';
  switch (targetProperty) {
    case 'googleClientID':
      property = '740566870787-853trkjv95rd4mffc01cinjjqippl427.apps.googleusercontent.com';
      break;
    case 'facebookClientID':
      property = '1234567890abcdef1234567890abcdef1234567890abcdef';
      break;
    default:
      property = '';
  }
  return (property);
}