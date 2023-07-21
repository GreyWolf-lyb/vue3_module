// 一些全局的config配置
const evn:any = process.env.NODE_ENV;

const modeUrlObj:{[index:string]:any} = {
    // 生产环境
    'production': {
        baseURL: 'http://xxx:9091/prod/',
        authBaseURL: ''
    },
    // 开发环境
    'development': {
        baseURL: 'http://xxxx:9091/dev/',
        authBaseURL: ''
    },
    // 测试环境
    'test': {
        baseURL: 'http://xxxx:9091/test/',
        authBaseURL: ''
    }
}

export default modeUrlObj[evn];
