<template>
    <el-container class="container">
        <el-header>
            <h1>JavaApiDocs文档</h1>
        </el-header>
        <el-container>
            <el-aside>
                <el-menu class="el-menu-vertical-demo"
                         text-color="#000"
                         :default-openeds="['0','1','2','3','4','5','6']"
                         active-text-color="#5cba5c">
                    <el-menu-item index="0">
                        <template slot="title">
                            <a href="#visit">访问ApiDocs页面方式</a>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="0">
                        <template slot="title">
                            <a href="#example">示例</a>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="1">
                        <template slot="title">
                            <a href="#common">辅助工具</a>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <template slot="title">
                            <a href="#maven">maven配置</a>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <template slot="title">
                            <a href="#Interceptor">拦截器配置</a>
                        </template>
                    </el-menu-item>
                    <el-submenu index="4">
                        <template slot="title">
                            <span>入门用法</span>
                        </template>
                        <el-menu-item>
                            <a href="#ApiIgnore">@ApiIgnore</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiEnable">@ApiEnable</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiClass">@ApiClass</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiMethod">@ApiMethod</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiModel">@ApiModel</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiProperty">@ApiProperty</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiParam">@ApiParam(入门用法)</a>
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <span>中级用法</span>
                        </template>
                        <el-menu-item>
                            <a href="#ApiBasicReturn">@ApiBasicReturn</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiMapProperty">@ApiMapProperty</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiAppointParam">@ApiAppointParam</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiGlobalClass">@ApiGlobalClass</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiGlobalCode">@ApiGlobalCode</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiCode">@ApiCode</a>
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <span>高级用法</span>
                        </template>
                        <el-menu-item>
                            <a href="#ApiParamModelProperty">@ApiParamModelProperty</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiMapParam">@ApiMapParam</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiParam_high">@ApiParam（高级用法）</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiReturnModelProperty">@ApiReturnModelProperty</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiMapReturn">@ApiMapReturn</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#ApiReturn">@ApiReturn</a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="#rule">@覆盖规则</a>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <el-row class="detail">
                    <el-row>
                        <h3 id="visit">访问ApiDocs页面方式</h3>
                    </el-row>
                    <el-row>
                        ip:端口/项目名/citrsw/index.html
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="example">示例</h3>
                    </el-row>
                    <el-row>
                        <el-row><a target="_blank" href="https://example.citrsw.com/example/citrsw/index.html">示例页面</a></el-row>
                        <el-row><a target="_blank" href="https://github.com/15706058532/api-example">示例后端java代码</a></el-row>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="common">辅助工具</h3>
                    </el-row>
                    <el-row>
                        <el-row><a target="_blank" href="https://github.com/15706058532/MyBatisPlusGenerator">集成JavaApiDocs的代码生成器</a></el-row>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="maven">maven配置</h3>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="xml code">{{maven}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="Interceptor">拦截器配置</h3>
                        如果使用了拦截器则必须放行JavaApiDocs的请求
                    </el-row>
                    <ol>
                        <li><pre v-highlightjs>
                            <code class="java code">registry.addResourceHandler("/citrsw/**").addResourceLocations("classpath:/citrsw/");</code>
                        </pre></li>
                        <li><pre v-highlightjs>
                            <code class="java code">.excludePathPatterns("/citrsw/**")</code>
                        </pre></li>
                    </ol>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{interceptor}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row>
                    <h2>入门用法</h2>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiIgnore">@ApiIgnore</h3>
                    </el-row>
                    <el-row>
                        忽略不需要的类、方法、属性、入参
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        适用于Controller类、Controller的方法上、实体类属性上、入参参数上
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiIgnore}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiEnable">@ApiEnable</h3>
                    </el-row>
                    <el-row>
                        激活
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        Spring-Boot 启动类上
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>项目名称</td>
                            </tr>
                            <tr>
                                <td>underscore</td>
                                <td>是否使用下划线名称</td>
                            </tr>
                            <tr>
                                <td>actives</td>
                                <td>适用环境</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiEnable}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiClass">@ApiClass</h3>
                    </el-row>
                    <el-row>
                        Controller类描述
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        Controller类上
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>Controller类描述</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiClass}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiMethod">@ApiMethod</h3>
                    </el-row>
                    <el-row>
                        对GET、PUT、POST、DELETE方法进行描述
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        Controller类的public方法上
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>Controller类中方法的描述</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiMethod}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiModel">@ApiModel</h3>
                    </el-row>
                    <el-row>
                        对实体类进行描述
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        实体类上
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>实体类描述</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiModel}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiProperty">@ApiProperty</h3>
                    </el-row>
                    <el-row>
                        对实体类的属性进行描述
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        <el-row>实体类的属性上</el-row>
                        <el-row>实体类属性的get/set方法上</el-row>
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>属性别名</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>属性描述</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>是否必须</td>
                            </tr>
                            <tr>
                                <td>example</td>
                                <td>示例</td>
                            </tr>
                            <tr>
                                <td>defaultValue</td>
                                <td>默认值</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiProperty}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiParam">@ApiParam(入门用法)</h3>
                    </el-row>
                    <el-row>
                        对Controller类中的方法入参参数进行描述
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        Controller类public方法上的入参参数上
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>入参别名</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>描述</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>是否必须</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>数据类型[int,int[],long,long[],date,date[],string,string[],double,double[]···等]</td>
                            </tr>
                            <tr>
                                <td>format</td>
                                <td>数据格式(一般用于日期)[例如：yyyy-MM-dd HH:mm:ss]</td>
                            </tr>
                            <tr>
                                <td>defaultValue</td>
                                <td>默认值</td>
                            </tr>
                            <tr>
                                <td>example</td>
                                <td>示例</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiParam}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row>
                    <h2>中级用法</h2>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiBasicReturn">@ApiBasicReturn</h3>
                    </el-row>
                    <el-row>
                        用于响应返回基本数据类型的场景
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        <el-row>Controller类的public方法上</el-row>
                        <el-row>仅仅适用于响应为基本数据类型的场景</el-row>
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>描述</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiBasicReturn}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiMapProperty">@ApiMapProperty</h3>
                    </el-row>
                    <el-row>
                        主要用于响应类型为Map或包含Map属性的类
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        <el-row>实体类属性</el-row>
                        <el-row>实体类属性的get/set方法上</el-row>
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>Map类型的key名称（支持多级配置，例如：user.info.level）</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>描述</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>是否必须</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>类型（在实际类型为Object时生效）</td>
                            </tr>
                            <tr>
                                <td>format</td>
                                <td>数据格式(一般用于日期)[例如：yyyy-MM-dd HH:mm:ss]</td>
                            </tr>
                            <tr>
                                <td>defaultValue</td>
                                <td>默认值</td>
                            </tr>
                            <tr>
                                <td>example</td>
                                <td>示例</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiMapProperty}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiAppointParam">@ApiAppointParam</h3>
                    </el-row>
                    <el-row>
                        主要用于不需要全部实体属性的场景
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        <el-row>Controller类的public方法上</el-row>
                        <el-row>仅仅适用于入参类型</el-row>
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>require</td>
                                <td>必须传入的属性名称数组</td>
                            </tr>
                            <tr>
                                <td>nonRequire</td>
                                <td>非必须传入的属性名称数组</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiAppointParam}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiGlobalClass">@ApiGlobalClass</h3>
                    </el-row>
                    <el-row>
                        <el-row>主要用于使用第三方jar时，对请求或响应的第三方实体进行全局统一配置</el-row>
                        <el-row>可配置多个</el-row>
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        Spring-Boot 启动类上
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>类名</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>类描述</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>类型（入参：TypeEnum.PARAM,响应：TypeEnum.RETURN）</td>
                            </tr>
                            <tr>
                                <td>properties</td>
                                <td>ApiProperty数组（属性注解集合）</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiGlobalClass}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiGlobalCode">@ApiGlobalCode</h3>
                    </el-row>
                    <el-row>
                        <el-row>主要用于全局配置响应状态码</el-row>
                        <el-row>可配置多个</el-row>
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        Spring-Boot 启动类上
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>参数名</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>值</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>描述</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiGlobalCode}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiCode">@ApiCode</h3>
                    </el-row>
                    <el-row>
                        <el-row>主要针对当前方法覆盖全局配置的状态码或追加当前接口的状态码</el-row>
                        <el-row>可配置多个</el-row>
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        Controller类的public方法上
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>参数名</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>值</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>描述</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiCode}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row>
                    <h2>高级用法</h2>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiParamModelProperty">@ApiParamModelProperty</h3>
                    </el-row>
                    <el-row>
                        主要用于覆盖实体类中属性上@ApiProperty注解的配置
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        <el-row>Controller类的public方法上</el-row>
                        <el-row>仅仅适用于入参的实体</el-row>
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>属性名称（支持多级配置，例如：user.info.level）</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>描述</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>是否必须</td>
                            </tr>
                            <tr>
                                <td>defaultValue</td>
                                <td>默认值</td>
                            </tr>
                            <tr>
                                <td>example</td>
                                <td>示例</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiParamModelProperty}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiMapParam">@ApiMapParam</h3>
                    </el-row>
                    <el-row>
                        主要用于入参类型为Map或包含Map
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        Controller类的public方法上
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td><a href="#ApiParam_hig">@ApiParam</a>数组</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiMapParam}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiParam_high">@ApiParam（高级用法）</h3>
                    </el-row>
                    <el-row>
                        主要用于入参类型为Map或包含Map
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        @ApiMapParam的value参数 或 Controller类public方法上的入参参数
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>Map类型的key名称（支持多级配置，例如：user.info.level）</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>描述</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>是否必须</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>类型（在实际类型为Object时生效）</td>
                            </tr>
                            <tr>
                                <td>format</td>
                                <td>数据格式(一般用于日期)[例如：yyyy-MM-dd HH:mm:ss]</td>
                            </tr>
                            <tr>
                                <td>defaultValue</td>
                                <td>默认值</td>
                            </tr>
                            <tr>
                                <td>example</td>
                                <td>示例</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiParam_high}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiReturnModelProperty">@ApiReturnModelProperty</h3>
                    </el-row>
                    <el-row>
                        主要用于覆盖实体类中属性上@ApiProperty注解的配置
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        <el-row>Controller类的public方法上</el-row>
                        <el-row>仅仅适用于响应的实体</el-row>
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>属性名称（支持多级配置，例如：user.info.level）</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>描述</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiReturnModelProperty}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiMapReturn">@ApiMapReturn</h3>
                    </el-row>
                    <el-row>
                        主要用于响应类型为Map或包含Map
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        Controller类的public方法上
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td><a href="#ApiReturn">@ApiReturn</a>数组</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiMapReturn}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <el-row>
                        <h3 id="ApiReturn">@ApiReturn</h3>
                    </el-row>
                    <el-row>
                        主要用于响应类型为Map或包含Map
                    </el-row>
                    <el-row>
                        <h4>适用范围</h4>
                    </el-row>
                    <el-row>
                        @ApiMapReturn的value参数
                    </el-row>
                    <el-row>
                        <h4>参数说明</h4>
                    </el-row>
                    <el-row>
                        <table>
                            <tr>
                                <th>参数名</th>
                                <th>说明</th>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>Map类型的key名称（支持多级配置，例如：user.info.level）</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>描述</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>类型（在实际类型为Object时生效）</td>
                            </tr>
                            <tr>
                                <td>format</td>
                                <td>数据格式(一般用于日期)[例如：yyyy-MM-dd HH:mm:ss]</td>
                            </tr>
                        </table>
                    </el-row>
                    <el-row>
                        <h4>使用示例</h4>
                    </el-row>
                    <el-row>
                        <pre v-highlightjs>
                            <code class="java code">{{apiReturn}}</code>
                        </pre>
                    </el-row>
                </el-row>
                <el-row class="detail">
                    <h2 id="rule">覆盖规则</h2>
                    <el-row>
                        <h3>针对同一个属性进行多个配置则按以下方式，前面的配置覆盖后面的配置</h3>
                        <ol>
                            <li>实体注解配置：get()/set()方法上的注解 > 对应属性上的注解</li>
                            <li>ApiProperty.description【描述】 > ApiModel.value【描述】</li>
                            <li>ApiModelProperty > ApiParam = ApiMapParam > ApiProperty = ApiMapProperty</li>
                            <li>ApiReturnModelProperty > ApiReturn = ApiMapReturn > ApiProperty = ApiMapProperty</li>
                            <li>ApiCode > ApiGlobalCode</li>
                        </ol>
                    </el-row>
                    <el-row>
                        <h3>注意</h3>
                        <ol>
                            <li>ApiModelProperty 和ApiReturnModelProperty不支持Map类型</li>
                            <li>ApiMapParam = ApiMapReturn 可对实体类的属性为Map类型的进行覆盖</li>
                        </ol>
                    </el-row>
                    <el-row>
                        <h3>从总体进行分类</h3>
                        方法上的注解 > 属性上的注解 > 全局注解
                    </el-row>
                </el-row>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                maven: '<dependency>\n' +
                    '    <groupId>com.citrsw</groupId>\n' +
                    '    <artifactId>java-api-docs</artifactId>\n' +
                    '    <version>1.5.8-beta</version>\n' +
                    '</dependency>',
                interceptor: '\n' +
                    '/**\n' +
                    ' * 拦截器配置\n' +
                    ' *\n' +
                    ' * @author Zhenfeng Li\n' +
                    ' * @date 2020-01-07 15:15:11\n' +
                    ' */\n' +
                    '@Configuration\n' +
                    'public class InterceptorConfig implements WebMvcConfigurer {\n' +
                    '\n' +
                    '    private final LoginInterceptor loginInterceptor;\n' +
                    '\n' +
                    '    public InterceptorConfig(LoginInterceptor loginInterceptor) {\n' +
                    '        this.loginInterceptor = loginInterceptor;\n' +
                    '    }\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 放行API\n' +
                    '     *\n' +
                    '     */\n' +
                    '    @Override\n' +
                    '    public void addResourceHandlers(ResourceHandlerRegistry registry) {\n' +
                    '        registry.addResourceHandler("/citrsw/**").addResourceLocations("classpath:/citrsw/");\n' +
                    '    }\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 配置拦截器执行顺序\n' +
                    '     */\n' +
                    '    @Override\n' +
                    '    public void addInterceptors(InterceptorRegistry registry) {\n' +
                    '        // 多个拦截器组成一个拦截器链\n' +
                    '        // 默认全部拦截\n' +
                    '        // addPathPatterns 添加拦截\n' +
                    '        // excludePathPatterns 排除拦截\n' +
                    '        //登录拦截器\n' +
                    '        registry.addInterceptor(loginInterceptor)\n' +
                    '                //需要拦截的uri\n' +
                    '                .addPathPatterns("/**")\n' +
                    '                //需要跳过的uri\n' +
                    '                .excludePathPatterns("/citrsw/**", "/login", "/logout")\n' +
                    '                //拦截器的执行顺序\n' +
                    '                .order(1);\n' +
                    '    }\n' +
                    '}',
                apiIgnore:'//Controller类\n' +
                    '@RestController\n' +
                    '@Slf4j\n' +
                    '@ApiClass(value = "管理员")\n' +
                    '@ApiIgnore\n' +
                    'public class UserController {\n' +
                    '\n' +
                    '}\n' +
                    '//Controller类方法\n' +
                    '@ApiMethod("根据条件分页查询")\n' +
                    '@GetMapping("/user/page/all")\n' +
                    '@ApiIgnore\n' +
                    'public Result<Page<User>> pageAll(User user, Page<User> page) {\n' +
                    '    LambdaQueryWrapper<User> wrapper = Wrappers.lambdaQuery();\n' +
                    '\treturn Result.buildQueryOk(userService.page(page, wrapper));\n' +
                    '}\n' +
                    '//实体类属性\n' +
                    '/**\n' +
                    ' * 主键Id\n' +
                    ' */\n' +
                    '@ApiProperty(description = "主键Id")\n' +
                    '@ApiIgnore\n' +
                    'private Long id;',
                apiEnable: '@ApiEnable(name = "中国IT资源分享网站", underscore = true, actives = {"dev","test"})\n' +
                    '@SpringBootApplication\n' +
                    'public class ApiExampleApplication {\n' +
                    '    public static void main(String[] args) {\n' +
                    '        SpringApplication.run(ApiExampleApplication.class, args);\n' +
                    '    }\n' +
                    '\n' +
                    '}',
                apiClass: '@ApiClass(value = "学生")\n' +
                    '@RestController\n' +
                    'public class StudentController {\n' +
                    '}',
                apiMethod: '@ApiMethod("根据条件分页查询")\n' +
                    '@GetMapping("/user/page/all")\n' +
                    'public Result<Page<User>> pageAll(User user, Page<User> page) {\n' +
                    '    LambdaQueryWrapper<User> wrapper = Wrappers.lambdaQuery();\n' +
                    '    return Result.buildQueryOk(userService.page(page, wrapper));\n' +
                    '}',
                apiModel: '@TableName("tb_user")\n' +
                    '@Accessors(chain = true)\n' +
                    '@Data\n' +
                    '@ApiModel("管理员")\n' +
                    'public class User implements Serializable {\n' +
                    '}',
                apiProperty: '/**\n' +
                    ' * 主键Id\n' +
                    ' */\n' +
                    ' @ApiProperty(description = "主键Id")\n' +
                    ' private Long id;\n' +
                    '/**\n' +
                    ' * 登录名\n' +
                    ' */\n' +
                    ' @ApiProperty(description = "登录名", name = "login_name", required = true, example = "admin")\n' +
                    ' private String loginName;',
                apiParam: '@ApiMethod("根据条件分页查询")\n' +
                    '@GetMapping("/user/page/all")\n' +
                    'public Result<Page<User>> pageAll(User user, @RequestParam(defaultValue = "1")@ApiParam(description = "当前页", defaultValue = "1") Integer page, @RequestParam(defaultValue = "10") @ApiParam(description = "每页数据条数", defaultValue = "10") Integer pageSize) {\n' +
                    '    LambdaQueryWrapper<User> wrapper = Wrappers.lambdaQuery();\n' +
                    '    return Result.buildQueryOk(userService.page(new Page<>(page, pageSize), wrapper));\n' +
                    '}',
                apiBasicReturn: '@ApiMethod("保存学生信息")\n' +
                    '@PostMapping("/student")\n' +
                    '@ApiBasicReturn(description = "保存结果")\n' +
                    'public Boolean saveStudent(@RequestBody Student student) {\n' +
                    '    return studentService.save(student);\n' +
                    '}',
                apiMapProperty: '@ApiMapProperty(name = "level", description = "用户等级", type = "int")\n' +
                    '@ApiMapProperty(name = "integral", description = "用户积分", type = "int")\n' +
                    'private Map<String,Integer> userInfo;',
                apiAppointParam: '@ApiMethod("入参Student类仅显示指定属性")\n' +
                    '@GetMapping("/appoint/student")\n' +
                    '@ApiAppointParam(require = {"age", "sex"}, nonRequire = {"name"})\n' +
                    'public Student countNumByClazzId(Student student) {\n' +
                    '    return student;\n' +
                    '}\n' +
                    '//对应的实体类\n' +
                    '/**\n' +
                    '* 学生\n' +
                    '*\n' +
                    '* @author Zhenfeng Li\n' +
                    '* @version 1.0.0\n' +
                    '* @date 2020-10-02 08:59:51\n' +
                    '*/\n' +
                    '@TableName("tb_student")\n' +
                    '@Accessors(chain = true)\n' +
                    '@Data\n' +
                    '@ApiModel("学生")\n' +
                    'public class Student implements Serializable {\n' +
                    '\n' +
                    '    private static final long serialVersionUID = 1L;\n' +
                    '\n' +
                    '    /**\n' +
                    '    * 主键Id\n' +
                    '    */\n' +
                    '    @ApiProperty(description = "主键Id")\n' +
                    '    private Long id;\n' +
                    '\n' +
                    '    /**\n' +
                    '    * 学号\n' +
                    '    */\n' +
                    '    @ApiProperty(description = "学号")\n' +
                    '    private String no;\n' +
                    '\n' +
                    '    /**\n' +
                    '    * 姓名\n' +
                    '    */\n' +
                    '    @ApiProperty(description = "姓名")\n' +
                    '    private String name;\n' +
                    '\n' +
                    '    /**\n' +
                    '    * 年龄\n' +
                    '    */\n' +
                    '    @ApiProperty(description = "年龄")\n' +
                    '    private Integer age;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 性别 0：女，1：男，3：保密\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "性别 0：女，1：男，3：保密")\n' +
                    '    private Integer sex;\n' +
                    '\n' +
                    '    /**\n' +
                    '    * 班级Id\n' +
                    '    */\n' +
                    '    @ApiProperty(description = "班级Id")\n' +
                    '    private Long clazzId;\n' +
                    '\n' +
                    '    /**\n' +
                    '    * 班主任Id\n' +
                    '    */\n' +
                    '    @ApiProperty(description = "班主任Id")\n' +
                    '    private Long teacherId;\n' +
                    '}',
                apiGlobalClass: '//入参全局配置\n' +
                    '@SpringBootApplication\n' +
                    '@ApiEnable(name = "中国IT资源分享网站", underscore = true)\n' +
                    '@ApiGlobalClass(name = Page.class, type = TypeEnum.PARAM, properties = {\n' +
                    '        @ApiProperty(name = "current", description = "当前页", defaultValue = "1"),\n' +
                    '        @ApiProperty(name = "size", description = "每页显示条数", defaultValue = "10"),\n' +
                    '        @ApiProperty(name = "orders.asc", description = "排序方式"),\n' +
                    '        @ApiProperty(name = "orders.column", description = "排序字段")\n' +
                    '})\n' +
                    'public class ApiExampleApplication {\n' +
                    '    public static void main(String[] args) {\n' +
                    '        SpringApplication.run(ApiExampleApplication.class, args);\n' +
                    '    }\n' +
                    '}\n' +
                    '//响应全局配置\n' +
                    '@SpringBootApplication\n' +
                    '@ApiEnable(name = "中国IT资源分享网站", underscore = true)\n' +
                    '@ApiGlobalClass(name = Page.class, description = "分页", type = TypeEnum.RETURN, properties = {\n' +
                    '        @ApiProperty(name = "current", description = "当前页"),\n' +
                    '        @ApiProperty(name = "size", description = "每页显示条数"),\n' +
                    '        @ApiProperty(name = "records"),\n' +
                    '        @ApiProperty(name = "previous", description = "是否有上一页"),\n' +
                    '        @ApiProperty(name = "next", description = "是否有下一页"),\n' +
                    '        @ApiProperty(name = "total", description = "总条数"),\n' +
                    '        @ApiProperty(name = "pages", description = "总页数"),\n' +
                    '})\n' +
                    'public class ApiExampleApplication {\n' +
                    '    public static void main(String[] args) {\n' +
                    '        SpringApplication.run(ApiExampleApplication.class, args);\n' +
                    '    }\n' +
                    '}',
                apiGlobalCode: '@SpringBootApplication\n' +
                    '@ApiEnable(name = "中国IT资源分享网站", underscore = true)\n' +
                    '@ApiGlobalCode(name = "code", value = "200", description = "成功")\n' +
                    '@ApiGlobalCode(name = "code", value = "300", description = "失败")\n' +
                    '@ApiGlobalCode(name = "code", value = "400", description = "token失效")\n' +
                    '@ApiGlobalCode(name = "code", value = "500", description = "系统内部异常")\n' +
                    'public class ApiExampleApplication {\n' +
                    '    public static void main(String[] args) {\n' +
                    '        SpringApplication.run(ApiExampleApplication.class, args);\n' +
                    '    }\n' +
                    '}',
                apiCode: '@ApiMethod("增加状态码/覆盖全局状态码")\n' +
                    '@GetMapping("/add/code")\n' +
                    '@ApiCode(name = "code", value = "200", description = "用户保存成功")\n' +
                    '@ApiCode(name = "code", value = "300", description = "用户保存失败")\n' +
                    '@ApiCode(name = "code", value = "310", description = "用户名或密码为空")\n' +
                    'public Student save(Student student) {\n' +
                    '    return student;\n' +
                    '}',
                apiParamModelProperty: '/**\n' +
                    ' * 保存\n' +
                    ' */\n' +
                    '@ApiMethod("保存")\n' +
                    '@PostMapping("/user")\n' +
                    '@ApiParamModelProperty(name = "username",description = "账号",required = true)\n' +
                    '@ApiParamModelProperty(name = "phone",description = "固定电话号码",required = true)\n' +
                    'public Result<Boolean> save(@RequestBody User user, HttpSession session) {\n' +
                    '    boolean save = userService.save(user);\n' +
                    '    return Result.buildSaveOk(save);\n' +
                    '}\n' +
                    '//对应的实体类\n' +
                    '/**\n' +
                    ' * 管理员\n' +
                    ' *\n' +
                    ' * @author Zhenfeng Li\n' +
                    ' * @version 1.0.0\n' +
                    ' * @date 2020-10-02 08:59:51\n' +
                    ' */\n' +
                    '@TableName("tb_user")\n' +
                    '@Accessors(chain = true)\n' +
                    '@Data\n' +
                    '@ApiModel("管理员")\n' +
                    'public class User implements Serializable {\n' +
                    '\n' +
                    '    private static final long serialVersionUID = 1L;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 主键Id\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "主键Id")\n' +
                    '    private Long id;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 用户名\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "用户名")\n' +
                    '    private String username;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 登录名\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "登录名", name = "loginName", required = true, example = "admin")\n' +
                    '    private String loginName;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 密码\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "密码")\n' +
                    '    private String password;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 手机号\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "手机号")\n' +
                    '    private String phone;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 用户扩展信息\n' +
                    '     */\n' +
                    '    @ApiMapProperty(name = "level", description = "用户等级", type = "int")\n' +
                    '    @ApiMapProperty(name = "integral", description = "用户积分", type = "int")\n' +
                    '    private Map<String, Integer> userInfo;\n' +
                    '}',
                apiMapParam: '@ApiMethod("入参为Map<String,Object>类型")\n' +
                    '@GetMapping("/map/object")\n' +
                    '@ApiMapParam({\n' +
                    '    @ApiParam(name = "age", description = "年龄", type = "int", required = true),\n' +
                    '    @ApiParam(name = "sex", description = "性别", type = "int", required = true)\n' +
                    '})\n' +
                    'public Map<String, Object> mapObject(Map<String, Object> param) {\n' +
                    '    Integer age = (Integer) param.get("age");\n' +
                    '    Integer sex = (Integer) param.get("sex");\n' +
                    '    return param;\n' +
                    '}',
                apiParam_high: '//入门：Controller类public方法上的入参参数\n' +
                    '@ApiMethod("根据条件分页查询")\n' +
                    '@GetMapping("/user/page/all")\n' +
                    'public Result<Page<User>> pageAll(User user, @RequestParam(defaultValue = "1")@ApiParam(description = "当前页", defaultValue = "1") Integer page, @RequestParam(defaultValue = "10") @ApiParam(description = "每页数据条数", defaultValue = "10") Integer pageSize) {\n' +
                    '    LambdaQueryWrapper<User> wrapper = Wrappers.lambdaQuery();\n' +
                    '    return Result.buildQueryOk(userService.page(new Page<>(page, pageSize), wrapper));\n' +
                    '}\n' +
                    '//高级：@ApiMapParam的value参数\n' +
                    '@ApiMethod("入参为Map<String,  Map<String,Object>>类型")\n' +
                    '@GetMapping("/map/map/object")\n' +
                    '@ApiMapParam({\n' +
                    '    @ApiParam(name = "info.level", description = "用户等级", type = "int", required = true),\n' +
                    '    @ApiParam(name = "info.integral", description = "用户积分", type = "int", required = true),\n' +
                    '    @ApiParam(name = "username.", description = "用户名", type = "string", required = true)\n' +
                    '})\n' +
                    'public Map<String, Map<String,Object>> mapObject(Map<String,  Map<String,Object>> param) {\n' +
                    '    return param;\n' +
                    '}',
                apiReturnModelProperty: '/**\n' +
                    ' * 根据条件分页查询\n' +
                    ' */\n' +
                    '@ApiMethod("根据条件分页查询")\n' +
                    '@GetMapping("/return/user/page/all")\n' +
                    '@ApiReturnModelProperty(name = "data.records.username",description = "账号")\n' +
                    '@ApiReturnModelProperty(name = "data.records.phone",description = "固定电话号码")\n' +
                    'public Result<Page<User>> pageAll(User user, Page<User> page) {\n' +
                    '    LambdaQueryWrapper<User> wrapper = Wrappers.lambdaQuery();\n' +
                    '    return Result.buildQueryOk(userService.page(page, wrapper));\n' +
                    '}\n' +
                    '//Result实体类\n' +
                    '@Data\n' +
                    'public class Result<T> implements Serializable {\n' +
                    '    private static final long serialVersionUID = -2492072809889519824L;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 响应编码\n' +
                    '     */\n' +
                    '    private Integer code;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 响应消息\n' +
                    '     */\n' +
                    '    private String msg;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 响应数据\n' +
                    '     */\n' +
                    '    private T data;\n' +
                    '}\n' +
                    '//Page实体类\n' +
                    'public class Page<T> implements IPage<T> {\n' +
                    '\n' +
                    '    private static final long serialVersionUID = 8545996863226528798L;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 查询数据列表\n' +
                    '     */\n' +
                    '    private List<T> records = Collections.emptyList();\n' +
                    '}\n' +
                    '//User实体类\n' +
                    '@TableName("tb_user")\n' +
                    '@Accessors(chain = true)\n' +
                    '@Data\n' +
                    '@ApiModel("管理员")\n' +
                    'public class User implements Serializable {\n' +
                    '\n' +
                    '    private static final long serialVersionUID = 1L;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 主键Id\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "主键Id")\n' +
                    '    private Long id;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 用户名\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "用户名")\n' +
                    '    private String username;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 登录名\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "登录名", name = "loginName", required = true, example = "admin")\n' +
                    '    private String loginName;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 密码\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "密码")\n' +
                    '    private String password;\n' +
                    '\n' +
                    '    /**\n' +
                    '     * 手机号\n' +
                    '     */\n' +
                    '    @ApiProperty(description = "手机号")\n' +
                    '    private String phone;\n' +
                    '}',
                apiMapReturn: '@ApiMethod("出参为Map<String,Object>类型")\n' +
                    '@GetMapping("/map/list/student")\n' +
                    '@ApiMapReturn({\n' +
                    '    @ApiReturn(name = "username", type = "string", description = "用户名"),\n' +
                    '    @ApiReturn(name = "password", type = "string", description = "密码")\n' +
                    '})\n' +
                    'public Map<String, List<String>> mapListStudent() {\n' +
                    '    return null;\n' +
                    '}',
                apiReturn: '//响应为Map<String,  Map<String,Object>>类型\n' +
                    '@ApiMethod("响应为Map<String,  Map<String,Object>>类型")\n' +
                    '@GetMapping("/map/map/object")\n' +
                    '@ApiMapReturn({\n' +
                    '    @ApiReturn(name = "info.level", description = "用户等级", type = "int"),\n' +
                    '    @ApiReturn(name = "info.integral", description = "用户积分", type = "int"),\n' +
                    '    @ApiReturn(name = "username.", description = "用户名", type = "string")\n' +
                    '})\n' +
                    'public Map<String, Map<String,Object>> mapObject() {\n' +
                    '    return null;\n' +
                    '}\n' +
                    '//响应为List<Map<String, Map<String,Object>>>类型\n' +
                    '@ApiMethod("响应为List<Map<String, Map<String,Object>>>类型")\n' +
                    '@GetMapping("/list/map/map/object")\n' +
                    '@ApiMapReturn({\n' +
                    '    @ApiReturn(name = "info.level", description = "用户等级", type = "int", required = true),\n' +
                    '    @ApiReturn(name = "info.integral", description = "用户积分", type = "int", required = true),\n' +
                    '    @ApiReturn(name = "username.", description = "用户名", type = "int", required = true)\n' +
                    '})\n' +
                    'public List<Map<String, Map<String,Object>>> mapObject() {\n' +
                    '    return null;\n' +
                    '}'
            }
        }
    }
</script>

<style scoped>
    .el-row {
        text-align: left;
    }

    .el-header {
        background-color: #5cba5c;
        color: #FFFFFF;
    }

    .el-submenu {
        text-align: left;
        border-bottom: 1px solid #DCDFE6;
        background-color: #ededed;
    }

    .el-menu-item {
        text-align: left;
        background-color: #FFFFFF;
        padding: 0 0 0 45px !important;
        border-top: 1px solid #DCDFE6;
    }

    .el-submenu__title span, .el-menu-item {
        font-weight: bold;
    }

    .el-menu-item a {
        width: 100%;
        height: 100%;
        display: block;
        text-decoration: none;
        color: #000000;
    }

    .el-container {
        height: calc(100vh - 70px);
    }

    .code {
        text-align: left;
        font-size: 14px;
        line-height: 1.5;
        font-weight: bold;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }

    table {
        border-top: 1px solid #dcdfe6;
        border-left: 1px solid #dcdfe6;
    }

    th, td {
        padding: 5px;
        border-right: 1px solid #dcdfe6;
        border-bottom: 1px solid #dcdfe6;
    }

    .detail {
        background-color: #ededed;
        margin-bottom: 25px;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
</style>
