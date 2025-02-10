"use strict";(self.webpackChunkvlmhyperbench=self.webpackChunkvlmhyperbench||[]).push([[583],{8564:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>_,frontMatter:()=>l,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"api-docs/metric_evaluator","title":"metric_evaluator","description":"MetricEvaluator Objects","source":"@site/docs/api-docs/metric_evaluator.md","sourceDirName":"api-docs","slug":"/api-docs/metric_evaluator","permalink":"/VLMHyperBenchDocs/docs/api-docs/metric_evaluator","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-docs/metric_evaluator.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"dataset_iterator","permalink":"/VLMHyperBenchDocs/docs/api-docs/dataset_iterator"},"next":{"title":"model_interface","permalink":"/VLMHyperBenchDocs/docs/api-docs/model_interface"}}');var c=r(4848),i=r(8453);const l={},n=void 0,d={},s=[{value:"MetricEvaluator Objects",id:"metricevaluator-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"read_file",id:"read_file",level:4},{value:"validate_data",id:"validate_data",level:4},{value:"calculate_metrics_by_id",id:"calculate_metrics_by_id",level:4},{value:"calculate_metrics_by_doc_type",id:"calculate_metrics_by_doc_type",level:4},{value:"group_by_doc_question",id:"group_by_doc_question",level:4},{value:"calculate_metrics_general",id:"calculate_metrics_general",level:4}];function o(e){const a={code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.h2,{id:"metricevaluator-objects",children:"MetricEvaluator Objects"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-python",children:"class MetricEvaluator()\n"})}),"\n",(0,c.jsx)(a.p,{children:"\u041a\u043b\u0430\u0441\u0441 \u0434\u043b\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043c\u0435\u0442\u0440\u0438\u043a \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u043c\u043e\u0434\u0435\u043b\u0438."}),"\n",(0,c.jsx)(a.p,{children:"\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044b:\r\ntrue_csv (pd.DataFrame): DataFrame \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c\u0438 \u043e\u0442\u0432\u0435\u0442\u0430\u043c\u0438.\r\npred_csv (pd.DataFrame): DataFrame \u0441 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u0438."}),"\n",(0,c.jsx)("a",{id:"metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.__init__"}),"\n",(0,c.jsx)(a.h4,{id:"__init__",children:"__init__"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-python",children:"def __init__(true_file: str, prediction_file: str) -> None\n"})}),"\n",(0,c.jsx)(a.p,{children:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 MetricEvaluator."}),"\n",(0,c.jsx)(a.p,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:\r\ntrue_file (str): \u041f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c\u0438 \u043e\u0442\u0432\u0435\u0442\u0430\u043c\u0438 (CSV \u0438\u043b\u0438 TSV).\r\nprediction_file (str): \u041f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u0441 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 (CSV \u0438\u043b\u0438 TSV)."}),"\n",(0,c.jsx)(a.p,{children:"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f:\r\nValueError: \u0415\u0441\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0444\u0430\u0439\u043b\u0430\u0445 \u043d\u0435 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b."}),"\n",(0,c.jsx)("a",{id:"metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.read_file"}),"\n",(0,c.jsx)(a.h4,{id:"read_file",children:"read_file"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-python",children:"def read_file(file_path: str) -> pd.DataFrame\n"})}),"\n",(0,c.jsx)(a.p,{children:"\u0427\u0438\u0442\u0430\u0435\u0442 \u0444\u0430\u0439\u043b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044f (CSV \u0438\u043b\u0438 TSV)."}),"\n",(0,c.jsx)(a.p,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:\r\nfile_path (str): \u041f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443."}),"\n",(0,c.jsx)(a.p,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:\r\npd.DataFrame: DataFrame \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430."}),"\n",(0,c.jsx)(a.p,{children:"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f:\r\npd.errors.ParserError: \u0415\u0441\u043b\u0438 \u0444\u0430\u0439\u043b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d \u043a\u0430\u043a CSV \u0438\u043b\u0438 TSV."}),"\n",(0,c.jsx)("a",{id:"metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.validate_data"}),"\n",(0,c.jsx)(a.h4,{id:"validate_data",children:"validate_data"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-python",children:"def validate_data() -> None\n"})}),"\n",(0,c.jsx)(a.p,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 true_csv \u0438 pred_csv."}),"\n",(0,c.jsx)(a.p,{children:"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f:\r\nValueError: \u0415\u0441\u043b\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0438\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442."}),"\n",(0,c.jsx)("a",{id:"metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.calculate_metrics_by_id"}),"\n",(0,c.jsx)(a.h4,{id:"calculate_metrics_by_id",children:"calculate_metrics_by_id"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-python",children:"def calculate_metrics_by_id() -> pd.DataFrame\n"})}),"\n",(0,c.jsx)(a.p,{children:"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e ID."}),"\n",(0,c.jsx)(a.p,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:\r\npd.DataFrame: DataFrame \u0441 \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e ID."}),"\n",(0,c.jsx)(a.p,{children:"\u041c\u0435\u0442\u0440\u0438\u043a\u0438:"}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsx)(a.li,{children:"WER (Word Error Rate)"}),"\n",(0,c.jsx)(a.li,{children:"CER (Character Error Rate)"}),"\n",(0,c.jsx)(a.li,{children:"BLEU (Bilingual Evaluation Understudy)"}),"\n"]}),"\n",(0,c.jsx)("a",{id:"metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.calculate_metrics_by_doc_type"}),"\n",(0,c.jsx)(a.h4,{id:"calculate_metrics_by_doc_type",children:"calculate_metrics_by_doc_type"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-python",children:"def calculate_metrics_by_doc_type(df: pd.DataFrame) -> pd.DataFrame\n"})}),"\n",(0,c.jsx)(a.p,{children:"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430."}),"\n",(0,c.jsx)(a.p,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:\r\ndf (pd.DataFrame): DataFrame \u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u0430 calculate_metrics_by_id."}),"\n",(0,c.jsx)(a.p,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:\r\npd.DataFrame: DataFrame \u0441 \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430."}),"\n",(0,c.jsx)("a",{id:"metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.group_by_doc_question"}),"\n",(0,c.jsx)(a.h4,{id:"group_by_doc_question",children:"group_by_doc_question"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-python",children:"def group_by_doc_question(df: pd.DataFrame) -> pd.DataFrame\n"})}),"\n",(0,c.jsx)(a.p,{children:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u0443\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0442\u0438\u043f\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0438 \u0442\u0438\u043f\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u0430."}),"\n",(0,c.jsx)(a.p,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:\r\ndf (pd.DataFrame): \u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 DataFrame."}),"\n",(0,c.jsx)(a.p,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:\r\npd.DataFrame: \u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 DataFrame \u0441 \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c\u0438."}),"\n",(0,c.jsx)("a",{id:"metric_evaluator.metric_evaluator.metric_evaluator.MetricEvaluator.calculate_metrics_general"}),"\n",(0,c.jsx)(a.h4,{id:"calculate_metrics_general",children:"calculate_metrics_general"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-python",children:"def calculate_metrics_general() -> dict\n"})}),"\n",(0,c.jsx)(a.p,{children:"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043e\u0431\u0449\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043a\u043e\u0440\u043f\u0443\u0441\u0443 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,c.jsx)(a.p,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:\r\ndict: \u0421\u043b\u043e\u0432\u0430\u0440\u044c \u0441 \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c\u0438 WER, CER \u0438 BLEU."})]})}function _(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},8453:(e,a,r)=>{r.d(a,{R:()=>l,x:()=>n});var t=r(6540);const c={},i=t.createContext(c);function l(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);