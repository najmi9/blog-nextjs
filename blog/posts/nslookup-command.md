---
image: /imgs/blog/fc-scraping.jpeg
title: Nslookup Commands
slug: nslookup-command
description:  
---

# Name Server Lookup
is a useful command for getting information from DNS server. It is a network administration tool for querying the Domain Name System (DNS) to obtain domain name or IP address mapping or any other specific DNS record. It is also used to troubleshoot DNS related problems.

```bash
nslookup google.com
``` 
nslookup followed by the domain name will display the “A Record” (IP Address) of the domain. Use this command to find the address record for a domain. It queries to domain name servers and get the details.

```bash
nslookup -type=mx google.com 
```
Lookup for an mx record
MX (Mail Exchange) record maps a domain name to a list of mail exchange servers for that domain. The MX record tells that all the mails sent to “google.com” should be routed to the Mail server in that domain.

```bash
nslookup -type=txt google.com 
```
Lookup for an txt record

TXT records are useful for multiple types of records like DKIM, SPF, etc. You can find all TXT records configured for any domain using below command.

```bash
nslookup -type=a google.com
```
Lookup for an a record
We can also view all the available DNS records for a particular record using -type=a option.

```bash
nslookup -type=ns google.com
```
Lookup for an ns record

NS (Name Server) record maps a domain name to a list of DNS servers authoritative for that domain. It will output the name serves which are associated with the given domain.
```bash
nslookup -type=soa redhat.com
```
Lookup for an soa record
SOA record (start of authority), provides the authoritative information about the domain, the e-mail address of the domain admin, the domain serial number, etc…

```bash
nslookup -type=any google.com
```
Lookup for any record
We can also view all the available DNS records using -type=any option.
