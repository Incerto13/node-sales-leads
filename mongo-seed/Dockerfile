FROM mongo

COPY leads_init.json /leads_init.json
#  mongoimport --host <host_name> --username <user_name> --password <password> --db <database_name> --collection <collection_name> --file <input_file>
CMD mongoimport --host db --db nodeSalesLeads --collection leads --type json --file /leads_init.json --jsonArray
