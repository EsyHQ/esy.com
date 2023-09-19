exports.handler = async (event, context) => {
    const host = event.headers.host;
    const targetDomain = "esy.com";
  
    // Check if the host matches a subdomain pattern
    if (host && host.endsWith(`.${targetDomain}`) && !host.startsWith(`www.${targetDomain}`)) {
      // Redirect to the main domain
      return {
        statusCode: 301,
        headers: {
          Location: `https://${targetDomain}`,
        },
      };
    }
  
    // No redirection
    return {
      statusCode: 200,
      body: "OK",
    };
  };
  