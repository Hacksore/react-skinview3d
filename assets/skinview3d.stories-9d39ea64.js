import{R as r,j as n,a as M}from"./index-05a80585.js";import{r as l}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";class _{constructor(){this.speed=1,this.paused=!1,this.progress=0}update(e,t){if(this.paused)return;const i=t*this.speed;this.animate(e,i),this.progress+=i}}class A extends _{constructor(){super(...arguments),this.headBobbing=!0}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const a=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+a}}const B={title:"Examples",component:r,tags:["autodocs"]},o={render:()=>n(r,{skinUrl:"textures/skin-legacyhat-default-no_hd.png",height:300,width:150})},c={render:()=>M("div",{style:{display:"flex",flexDirection:"row"},children:[n(r,{className:"viewer",skinUrl:"textures/skin-legacyhat-default-no_hd.png",height:300,width:120}),n(r,{className:"viewer",skinUrl:"textures/skin-1.8-default-no_hd.png",height:300,width:120}),n(r,{skinUrl:"textures/skin-1.8-slim-no_hd.png",height:300,width:120})]})},h={render:()=>n(r,{className:"viewer",skinUrl:"textures/skin-legacyhat-default-no_hd.png",height:300,width:150,onReady:({viewer:s})=>{s.animation=new A,s.autoRotate=!0}})},d={render:()=>{const[s,e]=l.useState(""),t=l.useRef();return M("div",{children:[n(r,{className:"viewer",skinUrl:"textures/skin-legacyhat-default-no_hd.png",height:"300",width:"150",onReady:({viewer:a})=>{t.current=a},options:{preserveDrawingBuffer:!0}}),n("button",{onClick:()=>{if(!t.current)return;const a=t.current.canvas.toDataURL("image/png");e(a)},children:"Take screenshot"}),n("img",{src:s})]})}};var u,g,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <ReactSkinview3d skinUrl="textures/skin-legacyhat-default-no_hd.png" height={300} width={150} />;
  }
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var k,p,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
      <ReactSkinview3d className="viewer" skinUrl="textures/skin-legacyhat-default-no_hd.png" height={300} width={120} />
      <ReactSkinview3d className="viewer" skinUrl="textures/skin-1.8-default-no_hd.png" height={300} width={120} />
      <ReactSkinview3d skinUrl="textures/skin-1.8-slim-no_hd.png" height={300} width={120} />
    </div>
}`,...(w=(p=c.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var f,v,x;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ReactSkinview3d className="viewer" skinUrl="textures/skin-legacyhat-default-no_hd.png" height={300} width={150} onReady={({
    viewer
  }) => {
    // Add an animation
    viewer.animation = new WalkingAnimation();
    // Enabled auto rotate
    viewer.autoRotate = true;
  }} />
}`,...(x=(v=h.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var R,S,U;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [url, setUrl] = useState("");
    const viewerRef = useRef<SkinViewer>();
    const handleScreenshot = () => {
      if (!viewerRef.current) return;
      const iconUrl = viewerRef.current.canvas.toDataURL("image/png");
      setUrl(iconUrl);
    };
    return <div>
        <ReactSkinview3d className="viewer" skinUrl="textures/skin-legacyhat-default-no_hd.png" height="300" width="150" onReady={({
        viewer
      }) => {
        viewerRef.current = viewer;
      }} options={{
        preserveDrawingBuffer: true
      }} />

        <button onClick={handleScreenshot}>Take screenshot</button>

        <img src={url} />
      </div>;
  }
}`,...(U=(S=d.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};const D=["Basic","Multiple","Animation","Screenshot"];export{h as Animation,o as Basic,c as Multiple,d as Screenshot,D as __namedExportsOrder,B as default};
//# sourceMappingURL=skinview3d.stories-9d39ea64.js.map
