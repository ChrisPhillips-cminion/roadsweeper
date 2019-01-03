var kubernetes = require('kubernetes-client');
var namespace = process.env.namespace || "default";
//WEBHOOK
const logName = 'ROADSWEEPER - ';
const Client = require('kubernetes-client').Client
const config = require('kubernetes-client').config
// const client = new Client({
//     config: config.fromKubeconfig()
// })
const client = new Client({
    config: config.getInCluster()
})
const start = async function() {
    await client.loadSpec();
    const getFun = async function() {
        const get = await client.api.v1.namespaces(namespace).pod.get();
        get.body.items.forEach(function(pod) {
            if (pod.status.phase == "Succeeded") {
                log('Removing - ' + pod.metadata.name + ' (Status : ' + pod.status.phase + ')')
                del(pod.metadata.name)
            }
        });
    }
    await getFun();
}
const del = async function(name) {
    await client.api.v1.namespaces(namespace).pod(name).delete();
    await client.apis.batch.v1.namespaces(namespace).jobs(name.split(/......$/,'')).delete();
}
start();




function log(v) {
    var msg = logName + " - " + v;
    console.log(msg)
}
