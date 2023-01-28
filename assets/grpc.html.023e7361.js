import{r as n,o as s,c as a,a as e,b as l,F as o,d as t,e as c}from"./app.57a556c5.js";const i={},p=t('<h1 id="grpc" tabindex="-1"><a class="header-anchor" href="#grpc" aria-hidden="true">#</a> gRPC</h1><p>基于 gRPC 的传输方式。</p><p>它基于 HTTP/2 协议，理论上可以通过其它支持 HTTP/2 的服务器（如 Nginx）进行中转。 gRPC（HTTP/2）内置多路复用，不建议使用 gRPC 与 HTTP/2 时启用 mux.cool。</p><div class="custom-container warning"><p class="custom-container-title">⚠⚠⚠</p><ul><li>gRPC 不支持指定 Host。请在出站代理地址中填写 <strong>正确的域名</strong> ，或在 <code>(x)tlsSettings</code> 中填写 <code>ServerName</code>，否则无法连接。</li><li>gRPC 不支持回落到其他服务。</li><li>gRPC 服务存在被主动探测的风险。建议使用 Caddy 或 Nginx 等反向代理工具，通过 Path 前置分流。</li></ul></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果您使用 Caddy 或 Nginx 等反向代理，请注意下列事项：</p><ul><li>请确定反向代理服务器开启了 HTTP/2</li><li>请使用 HTTP/2 或 h2c (Caddy)，grpc_pass (Nginx) 连接到 Xray。</li><li>普通模式的 Path 为 <code>/${serviceName}/Tun</code>, Multi 模式为 <code>/${serviceName}/TunMulti</code></li></ul></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果你正在使用回落，请注意下列事项：</p><ul><li>不建议回落到 gRPC，存在被主动探测的风险。</li><li>请确认<code>h2</code> 位于 (x)tlsSettings.alpn 中的第一顺位，否则 gRPC（HTTP/2）可能无法完成 TLS 握手。</li><li>gRPC 无法通过进行 Path 分流。</li></ul></div><h2 id="grpcobject" tabindex="-1"><a class="header-anchor" href="#grpcobject" aria-hidden="true">#</a> GRPCObject</h2><p><code>GRPCObject</code> 对应传输配置的 <code>grpcSettings</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;multiMode&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>serviceName</code>: string</p></blockquote><p>一个字符串，指定服务名称，<strong>类似于</strong> HTTP/2 中的 Path。 客户端会使用此名称进行通信，服务端会验证服务名称是否匹配。</p>',11),r=e("code",null,"multiMode",-1),u=c(": bool "),d=e("p",null,[c("一个布尔值。表示是否启用 "),e("code",null,"multiMode"),c("。")],-1),g=e("p",null,[c("这是一个 "),e("strong",null,"实验性"),c(" 选项，可能不会被长期保留，也不保证跨版本兼容。此模式在 "),e("strong",null,"测试环境中"),c(" 能够带来约 20% 的性能提升，实际效果因传输速率不同而不同。")],-1);i.render=function(t,c){const i=n("Badge");return s(),a(o,null,[p,e("blockquote",null,[e("p",null,[r,u,l(i,{text:"BETA",type:"warning"})])]),d,g],64)};export default i;
