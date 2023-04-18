import{j as o,R as d}from"./index-05a80585.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const g={title:"Controls",tags:["autodocs"],args:{skinUrl:"textures/skin-legacyhat-default-no_hd.png",width:200,height:400}},n={argTypes:{skinUrl:{defaultValue:"textures/skin-legacyhat-default-no_hd.png",options:["textures/skin-legacyhat-default-no_hd.png","textures/skin-1.8-default-no_hd.png","textures/skin-1.8-slim-no_hd.png","textures/skin-old-default-no_hd.png"],control:{type:"select"}},width:{control:{type:"range",min:200,max:800,step:2}},height:{control:{type:"range",min:200,max:800,step:2}}},render:({skinUrl:r,width:a,height:i})=>o(d,{skinUrl:r,width:a,height:i})};var e,t,s;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  argTypes: {
    skinUrl: {
      defaultValue: "textures/skin-legacyhat-default-no_hd.png",
      options: ["textures/skin-legacyhat-default-no_hd.png", "textures/skin-1.8-default-no_hd.png", "textures/skin-1.8-slim-no_hd.png", "textures/skin-old-default-no_hd.png"],
      control: {
        type: "select"
      }
    },
    width: {
      control: {
        type: "range",
        min: 200,
        max: 800,
        step: 2
      }
    },
    height: {
      control: {
        type: "range",
        min: 200,
        max: 800,
        step: 2
      }
    }
  },
  // TODO: fix types?
  // @ts-ignore
  render: ({
    skinUrl,
    width,
    height
  }) => {
    return <ReactSkinview3d skinUrl={skinUrl} width={width} height={height} />;
  }
}`,...(s=(t=n.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const u=["Basic"];export{n as Basic,u as __namedExportsOrder,g as default};
//# sourceMappingURL=controls.stories-4a779462.js.map
