# ROADSWEEPER

ROADSWEEPER is a kubernetes cronjob that runs in a namespace and delete all completed pods and corresponding jobs. The purpose of this was to clean up a namespace after cronjbos had run. If the pod is not completed then both the pod and the job remain.


The helm chart for deployment is in the helm directory, the Container source is in dockerContainer. The Container is also available on docker hub.

Before the pod works you need to enable access to the pods in the desired namespace. I use the following command however anyone working in a secure environment should ensure they run with the correct permissions

```kubectl create clusterrolebinding default --clusterrole=cluster-admin --serviceaccount=<namespace>:default```

## Usage

```helm install <path to repo>/helm/roadsweeper> --set namespace=<target namespace> --namespace <namespace>```

# Warning
I have only done limited testing with the cronjob running in the same namespace I am cleaning. This is sufficient for my purposes.
