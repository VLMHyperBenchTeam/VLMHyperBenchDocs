// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
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
          items: [
            'architecture/adr/index',
            'architecture/adr/001-isolation',
            'architecture/adr/002-dynamic-dependencies',
            'architecture/adr/003-api-wrapper',
            'architecture/adr/004-smart-sync',
            'architecture/adr/005-registries',
          ],
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
      items: [
        'contributor-guide/development-workflow',
        'contributor-guide/dependency-management',
        'contributor-guide/project-structure',
      ],
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
};

export default sidebars;
