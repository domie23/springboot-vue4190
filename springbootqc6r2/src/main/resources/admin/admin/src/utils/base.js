const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootqc6r2/",
            name: "springbootqc6r2",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "财务管理系统"
        } 
    }
}
export default base
