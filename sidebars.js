// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: ['getting-started/quick-start', 'getting-started/installation'],
    },
    {
      type: 'category',
      label: '🏗️ Architecture',
      items: [
        'architecture/concept',
        'architecture/specification',
        {
          type: 'category',
          label: 'ADR',
          items: ['architecture/adr/index', 'architecture/adr/isolation'],
        },
      ],
    },
    {
      type: 'category',
      label: '📖 Guides',
      items: ['guides/running-benchmarks', 'guides/docker-deployment'],
    },
    {
      type: 'category',
      label: '🛠️ Contributor Guide',
      items: ['contributor-guide/development-workflow', 'contributor-guide/project-structure'],
    },
    {
      type: 'category',
      label: '🔬 Research',
      items: [
        'research/comparative-analysis',
        'research/vlm-evaluation-strategies',
        {
          type: 'category',
          label: '📁 Archive',
          items: [
            'research/archive/vlm-integration',
            'research/archive/evalscope-research',
            'research/archive/data-access',
            'research/archive/performance-metrics',
            'research/archive/abstraction-strategy',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📦 API Reference',
      items: [
        'api-docs/benchmark_run_config',
        'api-docs/dataset_iterator',
        'api-docs/metric_evaluator',
        'api-docs/model_interface',
        'api-docs/model_qwen2-vl',
        'api-docs/prompt_adapter',
        'api-docs/system_prompt_adapter',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
