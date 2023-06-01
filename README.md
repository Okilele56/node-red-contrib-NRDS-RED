# node-red-contrib-NRDS-RED


## Description 

This node is used to get some parameters about the running node-red.
It will give you the **port** on which on node-red is running such as the **httpAdminRoot**.

This node will add this information to the input msg

```
msg.uiPort = Port
msg.httpAdminRoot = httpAdminRoot
```

