"use strict";(self.webpackChunkvlmhyperbench=self.webpackChunkvlmhyperbench||[]).push([[943],{8009:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api-docs/model_interface","title":"model_interface","description":"measure\\\\inference\\\\time","source":"@site/docs/api-docs/model_interface.md","sourceDirName":"api-docs","slug":"/api-docs/model_interface","permalink":"/VLMHyperBenchDocs/docs/api-docs/model_interface","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-docs/model_interface.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"metric_evaluator","permalink":"/VLMHyperBenchDocs/docs/api-docs/metric_evaluator"},"next":{"title":"model_qwen2-vl","permalink":"/VLMHyperBenchDocs/docs/api-docs/model_qwen2-vl"}}');var i=r(4848),l=r(8453);const d={},c="model_interface.model_interface",t={},o=[{value:"measure_inference_time",id:"measure_inference_time",level:4},{value:"ModelFactory Objects",id:"modelfactory-objects",level:2},{value:"register_model",id:"register_model",level:4},{value:"get_model",id:"get_model",level:4},{value:"ModelInterface Objects",id:"modelinterface-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"predict_on_image",id:"predict_on_image",level:4},{value:"predict_on_images",id:"predict_on_images",level:4}];function a(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{id:"model_interface.model_interface"}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"model_interfacemodel_interface",children:"model_interface.model_interface"})}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_utils"}),"\n",(0,i.jsx)(n.h1,{id:"model_interfacemodel_interfacemodel_utils",children:"model_interface.model_interface.model_utils"}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_utils.measure_inference_time"}),"\n",(0,i.jsx)(n.h4,{id:"measure_inference_time",children:"measure_inference_time"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def measure_inference_time(model_callable: Callable[..., Any], *args,\n                           **kwargs) -> float\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0418\u0437\u043c\u0435\u0440\u044f\u0435\u0442 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f (inference time) \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0438\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model_callable"})," - \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u043b\u0438 \u043c\u0435\u0442\u043e\u0434 \u043c\u043e\u0434\u0435\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0443\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u0440\u0438\u0442\u044c."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"*args"})," - \u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0432 model_callable."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"**kwargs"})," - \u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0432 model_callable."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."}),"\n",(0,i.jsx)(n.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'model = MyModel()\ninput_data = "\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"\ninference_time = measure_inference_time(model.predict, input_data)\nprint(f"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f: {inference_time:.4f} \u0441\u0435\u043a\u0443\u043d\u0434")\n'})}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_factory"}),"\n",(0,i.jsx)(n.h1,{id:"model_interfacemodel_interfacemodel_factory",children:"model_interface.model_interface.model_factory"}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_factory.ModelFactory"}),"\n",(0,i.jsx)(n.h2,{id:"modelfactory-objects",children:"ModelFactory Objects"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class ModelFactory()\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0424\u0430\u0431\u0440\u0438\u043a\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439."}),"\n",(0,i.jsx)(n.p,{children:"\u041a\u043b\u0430\u0441\u0441 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438\u0445 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432.\n\u041c\u043e\u0434\u0435\u043b\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u043e \u0438\u043c\u0435\u043d\u0438 \u0438 \u043f\u0443\u0442\u0438 \u043a \u043a\u043b\u0430\u0441\u0441\u0443 \u0432 Python-\u043f\u0430\u043a\u0435\u0442\u0435."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_models"})," ",(0,i.jsx)(n.em,{children:"Dict[str, Type[Any]]"})," - \u0421\u043b\u043e\u0432\u0430\u0440\u044c \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439,\n\u0433\u0434\u0435 \u043a\u043b\u044e\u0447 \u2014 \u0438\u043c\u044f \u043c\u043e\u0434\u0435\u043b\u0438, \u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u2014 \u043a\u043b\u0430\u0441\u0441 \u043c\u043e\u0434\u0435\u043b\u0438."]}),"\n"]}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_factory.ModelFactory.register_model"}),"\n",(0,i.jsx)(n.h4,{id:"register_model",children:"register_model"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef register_model(cls, model_name: str, model_path: str) -> None\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043a\u043b\u0430\u0441\u0441 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e \u0435\u0451 \u043f\u0443\u0442\u0438 \u0432 python-\u043f\u0430\u043a\u0435\u0442\u0435."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model_name"})," ",(0,i.jsx)(n.em,{children:"str"})," - \u0418\u043c\u044f \u043c\u043e\u0434\u0435\u043b\u0438, \u043f\u043e\u0434 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043e\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model_path"})," ",(0,i.jsx)(n.em,{children:"str"})," - \u041f\u0443\u0442\u044c \u043a \u043a\u043b\u0430\u0441\u0441\u0443 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 'module_path",":class_name","'."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ImportError"})," - \u0415\u0441\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AttributeError"})," - \u0415\u0441\u043b\u0438 \u043a\u043b\u0430\u0441\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435."]}),"\n"]}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_factory.ModelFactory.get_model"}),"\n",(0,i.jsx)(n.h4,{id:"get_model",children:"get_model"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef get_model(cls,\n              model_name: str,\n              model_init_params: Optional[Dict[str, Any]] = None) -> Any\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e \u0435\u0451 \u0438\u043c\u0435\u043d\u0438."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model_name"})," ",(0,i.jsx)(n.em,{children:"str"})," - \u0418\u043c\u044f \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model_init_params"})," ",(0,i.jsx)(n.em,{children:"Optional[Dict[str, Any]]"})," - \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0435\u043b\u0438.\n\u0415\u0441\u043b\u0438 None, \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u043b\u043e\u0432\u0430\u0440\u044c."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Any"})," - \u042d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043c\u043e\u0434\u0435\u043b\u0438."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ValueError"})," - \u0415\u0441\u043b\u0438 \u043c\u043e\u0434\u0435\u043b\u044c \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430."]}),"\n"]}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_interface"}),"\n",(0,i.jsx)(n.h1,{id:"model_interfacemodel_interfacemodel_interface",children:"model_interface.model_interface.model_interface"}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_interface.ModelInterface"}),"\n",(0,i.jsx)(n.h2,{id:"modelinterface-objects",children:"ModelInterface Objects"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class ModelInterface(ABC)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439."}),"\n",(0,i.jsx)(n.p,{children:"\u042d\u0442\u043e\u0442 \u043a\u043b\u0430\u0441\u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438.\n\u041e\u043d \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model_name"})," ",(0,i.jsx)(n.em,{children:"str"}),' - \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043a\u0430\u043a \u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, "Qwen2-VL-2B").']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"system_prompt"})," ",(0,i.jsx)(n.em,{children:"str"})," - \u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u043f\u0442, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043c\u043e\u0434\u0435\u043b\u044c\u044e."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cache_dir"})," ",(0,i.jsx)(n.em,{children:"str"})," - \u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f \u0434\u043b\u044f \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0438."]}),"\n"]}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_interface.ModelInterface.__init__"}),"\n",(0,i.jsx)(n.h4,{id:"__init__",children:"__init__"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def __init__(model_name: str, system_prompt: str, cache_dir: str) -> None\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model_name"})," ",(0,i.jsx)(n.em,{children:"str"}),' - \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043a\u0430\u043a \u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, "Qwen2-VL-2B").']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"system_prompt"})," ",(0,i.jsx)(n.em,{children:"str"})," - \u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u043f\u0442, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043c\u043e\u0434\u0435\u043b\u044c\u044e."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cache_dir"})," ",(0,i.jsx)(n.em,{children:"str"})," - \u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f \u0434\u043b\u044f \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0438."]}),"\n"]}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_interface.ModelInterface.predict_on_image"}),"\n",(0,i.jsx)(n.h4,{id:"predict_on_image",children:"predict_on_image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef predict_on_image(image: Any, question: str) -> str\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"image"})," ",(0,i.jsx)(n.em,{children:"Any"})," - \u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0435.\n\u0422\u0438\u043f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u044b\u043c \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, PIL.Image, np.array \u0438 \u0442.\u0434.)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"question"})," ",(0,i.jsx)(n.em,{children:"str"})," - \u043f\u0440\u043e\u043c\u043f\u0442-\u0432\u043e\u043f\u0440\u043e\u0441 \u043f\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"})," - \u0441\u0442\u0440\u043e\u043a\u0430 \u0441 \u043e\u0442\u0432\u0435\u0442\u043e\u043c \u043e\u0442 \u043c\u043e\u0434\u0435\u043b\u0438."]}),"\n"]}),"\n",(0,i.jsx)("a",{id:"model_interface.model_interface.model_interface.ModelInterface.predict_on_images"}),"\n",(0,i.jsx)(n.h4,{id:"predict_on_images",children:"predict_on_images"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef predict_on_images(images: List[Any], question: str) -> str\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"images"})," ",(0,i.jsx)(n.em,{children:"List[Any]"})," - \u0421\u043f\u0438\u0441\u043e\u043a \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0435.\n\u0422\u0438\u043f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u044b\u043c \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"question"})," ",(0,i.jsx)(n.em,{children:"str"})," - \u043f\u0440\u043e\u043c\u043f\u0442-\u0432\u043e\u043f\u0440\u043e\u0441 \u043f\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"})," - \u0441\u0442\u0440\u043e\u043a\u0430 \u0441 \u043e\u0442\u0432\u0435\u0442\u043e\u043c \u043e\u0442 \u043c\u043e\u0434\u0435\u043b\u0438."]}),"\n"]}),"\n",(0,i.jsx)("a",{id:"model_interface.tests"}),"\n",(0,i.jsx)(n.h1,{id:"model_interfacetests",children:"model_interface.tests"})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(6540);const i={},l=s.createContext(i);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);