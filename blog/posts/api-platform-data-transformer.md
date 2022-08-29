---
title: Using Data Transformer in Api Platform Project
slug: api-platform-data-transformer
image: "/imgs/blog/api/api.webp"
---


## Introduction
As stated in the general design considerations, in most cases the DTO pattern should be implemented using an API Resource class representing the public data model exposed through the API and a custom data provider. In such cases, the class marked with #[ApiResource] will act as a DTO.

However, it's sometimes useful to use a specific class to represent the input or output data structure related to an operation.


![Api Platform DTO](/imgs/blog/api/api-platform-post-i-o.svg)
![Api Platform DTO](/imgs/blog/api/api-platform-put-i-o.svg)

##
