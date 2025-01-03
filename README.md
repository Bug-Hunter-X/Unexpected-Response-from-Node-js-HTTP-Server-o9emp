# Unexpected Response from Node.js HTTP Server

This repository demonstrates a common but subtle error in Node.js HTTP servers where the server responds with the requested URL instead of a proper HTTP response.  This can lead to unexpected behavior and errors on the client-side.

## Bug
The `bug.js` file contains the problematic code. The server incorrectly responds with the requested URL. This is often due to a missing or incomplete response handling.  Clients expect a proper HTTP response with status codes, headers, and a body, not just the raw URL.

## Solution
The `bugSolution.js` file provides the corrected code.  It demonstrates how to properly construct an HTTP response with a status code and a response body.