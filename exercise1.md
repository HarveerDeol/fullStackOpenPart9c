for end to end testing we would use something like a selienum which would be the java eqvilanet of cypress. we can use a familiar tool for linting known as eslint. as for building we would need some type of java compiler before we could deploy any code


some other options for setting up CI would be azure of possibly aws. its generally reccommended to use a tool like github actions if your already using github to store your source code, however if you are using bitbucket, something like bitbucket pipelines would be a good subsitute

i would say this enviorment would be best suited for cloud based hosting, the local hosting could get tedious to manage and as traffic needs fluxate it might not make sense for a company to own their own server. it would make most sense to based this decision on how traffic fluates, what type of budget the team is looking at, and where abouts are there clients located