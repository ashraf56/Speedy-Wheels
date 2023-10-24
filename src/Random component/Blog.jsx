import React from 'react';

const Blog = () => {
    return (
        <div style={{height:'900px'}}>
            <h1 className='text-center'>BLOG</h1>
<div className='container my-5 '>
<h2> <mark>Q1</mark> What is an access token and refresh token? How do they work and where should we store them on the client-side?

</h2>
<p> <strong>ANS:</strong>An access token is a piece of data .It  is a credential .An authentication server issues the access token . It grants a client application permission to access protected resources on a server on behalf of a user .A refresh token is a special token.  It is used to renew the access token if it expires. A refresh token has a longer lifetime than an access toke.Access tokens and refresh tokens work together to provide a secure and convenient way for client applications to access protected resources. 
We should use LocalStorage and HTTPONLY cookies for storing them .But it is not  secure system.
 </p>
<h2> <mark>Q2</mark> Compare SQL and NoSQL databases?
</h2>
<p> <strong>ANS:</strong>
<strong>SQL</strong> databases are table based.SQL databases have a predefined schema that requires data to follow a certain structure and format.SQL databases enforce strict data integrity rules. SQL databases use SQL as the standard query language for interacting with the database
<br />
<strong>NoSQL</strong> databases offer flexible schema design, allowing for dynamic and unstructured data. They can handle a variety of data formats like key-value pairs, documents, graphs, or wide-column stores.
NoSQL databases are optimized for high read/write performance, making them suitable for use cases that require low latency and high throughput.NoSQL databases use different query languages depending on the data model and the database system.
NoSQL databases do not have a standard way of defining relationships, but some data models support embedded documents or references.
 </p>
<h2> <mark>Q3</mark> What is express js? What is Nest JS ?
</h2>
<p> <strong>ANS:</strong>
Express.js is a  web application framework for Node.js.It provides a minimalist and flexible approach to building web applications and APIs.It does not enforce any specific way of structuring your application.
<br />
NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications.
 </p>
<h2> <mark>Q4</mark> What is MongoDB aggregate and how does it work ?

</h2>
<p> <strong>ANS:</strong>
 MongoDB aggregate is a command that performs aggregation operations using the aggregation pipeline.
 It has a powerful feature that allows us to perform advanced data processing and analysis operations on MongoDB collections. In the pipeline stage, it represents a specific operation or transformation applied to the data.It provides a rich set of operators and stages that enable  to perform of complex data analysis tasks directly within the database

 </p>

</div>

        </div>
    );
};

export default Blog;