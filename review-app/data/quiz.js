// 题库数据 - 整合课堂练习题、作业答案和历年真题（完整版 150+ 题）
const quizBank = [
  // ===== 选择题（2024-2025 试卷 + 课堂练习）=====
  {
    id: "q1", type: "choice", lecture: 1, topic: "软件基础",
    question: "有关软件特点，以下描述不正确的是",
    options: {
      A: "软件是一种人工制品，也是一种抽象的逻辑制品",
      B: "软件及生产不受物理定律约束，不会因为常年运行而出现物理层面的老化或磨损",
      C: "软件的生产方式与传统意义的物理产品生产制造方式相同，都要经过设计",
      D: "由于软件的逻辑性特点，软件的客户或用户常常最初时说不清楚软件需求"
    },
    answer: "C",
    explanation: "软件的生产方式与传统物理产品不同，软件是逻辑制品，其生产不受物理定律约束。",
    difficulty: 1, source: "2025 年试卷"
  },
  {
    id: "q2", type: "choice", lecture: 1, topic: "软件基础",
    question: "以下对软件的利益相关者描述正确的是",
    options: {
      A: "与软件发生交互的其他系统（如物理硬件系统、遗留系统）并不属于软件的利益相关者",
      B: "任何软件都有其利益相关者，他们可以是软件系统的受益者",
      C: "软件开发和测试人员是项目团队的研发成员，不是软件的利益相关者",
      D: "软件需求分析工作只与软件需求工程师相关，软件的客户和用户没有职责和义务提出软件需求"
    },
    answer: "B",
    explanation: "任何软件都有利益相关者，包括受益者、与软件交互的其他系统、开发测试人员、客户和用户等。",
    difficulty: 1, source: "2025 年试卷"
  },
  {
    id: "q3", type: "choice", lecture: 6, topic: "软件测试",
    question: "以下对软件测试的描述不正确的是",
    options: {
      A: "在实际的软件开发过程中，软件测试投入的工作量并不多",
      B: "软件测试的对象是目标软件系统的程序代码，而非高层的软件模型和文档",
      C: "软件测试是通过运行程序代码的方式来发现程序代码中潜藏的缺陷",
      D: "软件测试可用于发现程序代码中的缺陷，但不能用于证明代码是正确的"
    },
    answer: "B",
    explanation: "软件测试的对象不仅是程序代码，还包括高层的软件模型和文档。注意 A 选项描述也是不正确的（测试投入工作量通常很大），但 B 更明显错误。",
    difficulty: 2, source: "2025 年试卷"
  },
  {
    id: "q4", type: "choice", lecture: 5, topic: "软件设计",
    question: "以下对软件设计描述正确的是",
    options: {
      A: "软件详细设计过程，按顺序是用例设计、类设计、数据设计、体系结构设计",
      B: "软件详细设计的输入是软件需求、用户界面设计和对软件实现的约束和限制三类",
      C: "设计类图中的结点包括用例设计模型中相关对象所对应的类，还包括构成软件系统的各个子系统或构件，或在设计中新引进的设计类",
      D: "用例设计的输入是用例模型、用例交互模型（顺序图）和分析类模型三类"
    },
    answer: "D",
    explanation: "用例设计的输入是用例模型、用例交互模型（顺序图）和分析类模型三类。A 选项顺序错误，体系结构设计在详细设计之前。",
    difficulty: 3, source: "2025 年试卷"
  },
  {
    id: "q5", type: "choice", lecture: 5, topic: "软件体系结构",
    question: "有关软件体系结构设计，以下描述不正确的是",
    options: {
      A: "通常用 UML 的部署图、包图、类图、构件图等来表示软件体系结构的视图",
      B: "软件体系结构设计质量将直接决定整个软件系统的质量",
      C: "软件体系结构设计体现了系统最早的设计决策",
      D: "软件体系结构设计可为编码实现工作提供具体指导"
    },
    answer: "A",
    explanation: "软件体系结构视图通常用部署图、包图等表示，但不包括类图和构件图（这些属于详细设计层面）。",
    difficulty: 3, source: "2025 年试卷"
  },
  {
    id: "q6", type: "choice", lecture: 2, topic: "软件工程概述",
    question: "下面选项中，哪一项不属于软件工程的三要素",
    options: { A: "过程", B: "工具", C: "开发", D: "方法" },
    answer: "C",
    explanation: "软件工程三要素是：过程、工具、方法。'开发'不是三要素之一。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q7", type: "choice", lecture: 1, topic: "软件分类",
    question: "在软件工程中，软件通常可以根据其用途和功能进行分类。以下哪个选项正确描述了此类的软件分类？",
    options: {
      A: "系统软件、应用软件和支撑软件",
      B: "开源软件、闭源软件和混合软件",
      C: "传统软件、云计算软件和边缘计算软件",
      D: "商业软件、免费软件和试用软件"
    },
    answer: "A",
    explanation: "软件按用途和功能分为系统软件、应用软件和支撑软件三类。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q8", type: "choice", lecture: 6, topic: "软件测试",
    question: "在软件测试中，一个测试用例通常由一个四元偶 (T,S,I,O) 表示。以下哪个选项正确描述了这四个属性？",
    options: {
      A: "T 表示测试数据，S 表示系统状态，I 表示输入，O 表示输出",
      B: "T 表示测试用例标识，S 表示前置条件，I 表示测试输入，O 表示预期输出",
      C: "T 表示时间，S 表示步骤，I 表示接口，O 表示结果",
      D: "T 表示测试工具，S 表示软件版本，I 表示问题描述，O 表示解决方案"
    },
    answer: "B",
    explanation: "测试用例四元组：T-测试用例标识 (Test case ID)，S-前置条件 (Setup)，I-测试输入 (Input)，O-预期输出 (Output)。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q9", type: "choice", lecture: 5, topic: "软件设计",
    question: "以下对软件设计描述正确的是",
    options: {
      A: "软件设计主要关注于代码的编写和优化，确保软件的运行效率和可维护性",
      B: "软件设计包括创建系统的总体结构、定义各个模块及其接口、设计数据存储和管理方案、并制定详细的模块实现方案，以确保系统的功能性、可扩展性、和可维护性",
      C: "软件设计的主要任务是编写详细的需求文档，并与客户反复确认，确保需求被准确理解和记录",
      D: "软件设计仅涉及用户界面和体验的设计，确保最终用户的满意度和易用性"
    },
    answer: "B",
    explanation: "软件设计包括总体结构、模块接口、数据存储和详细实现方案，确保功能性、可扩展性和可维护性。",
    difficulty: 2, source: "2024 年试卷"
  },

  // ===== 判断题（2024-2025 试卷 + 课堂练习）=====
  {
    id: "q10", type: "judge", lecture: 1, topic: "软件基础",
    question: "软件是一种人工制品，是一种抽象的逻辑制品。",
    answer: true,
    explanation: "正确。软件是人工制品，也是抽象的逻辑制品。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q11", type: "judge", lecture: 4, topic: "需求工程",
    question: "需求工程是一个包括需求获取、需求分析、需求验证和需求管理的连续过程。",
    answer: true,
    explanation: "正确。需求工程包括需求获取、需求分析、需求验证和需求管理四个连续过程。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q12", type: "judge", lecture: 6, topic: "软件测试",
    question: "软件测试可用于发现程序代码中的缺陷，能用于证明软件是正确的。",
    answer: false,
    explanation: "错误。软件测试可以发现缺陷，但不能证明软件是正确的。这是测试的基本原理。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q13", type: "judge", lecture: 5, topic: "软件设计",
    question: "软件详细设计的过程包括用例设计、类设计、数据设计和体系结构设计。",
    answer: false,
    explanation: "错误。软件详细设计包括用例设计、类设计和数据设计，体系结构设计在详细设计之前进行，不属于详细设计。",
    difficulty: 2, source: "2024 年试卷"
  },
  {
    id: "q14", type: "judge", lecture: 3, topic: "群体化开发",
    question: "Github 是由我国管辖的在世界上具有较大影响力的开源软件托管平台。",
    answer: false,
    explanation: "错误。GitHub 由美国微软公司管辖，不是由中国管辖。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q15", type: "judge", lecture: 5, topic: "UML",
    question: "统一建模语言（UML）是一种用于软件设计的标准建模语言。",
    answer: true,
    explanation: "正确。UML 是软件设计的标准建模语言。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q16", type: "judge", lecture: 3, topic: "过程模型",
    question: "在瀑布模型中，所有阶段都是线性顺序进行，不能回退到前一阶段。",
    answer: false,
    explanation: "错误。瀑布模型虽然主要是线性顺序的，但在实际中可以回退到前一阶段，只是代价很高。",
    difficulty: 2, source: "2024 年试卷"
  },
  {
    id: "q17", type: "judge", lecture: 7, topic: "软件维护",
    question: "软件维护主要是对软件的错误进行修复，不涉及功能改进和性能优化。",
    answer: false,
    explanation: "错误。软件维护不仅包括纠正性维护（修复错误），还包括改善性维护（功能改进和性能优化）和适应性维护（适应环境变化）。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q18", type: "judge", lecture: 7, topic: "软件演化",
    question: "软件演化是指针对软件的大规模功能增强和结构调整，以实现变化的软件需求或提高软件系统的质量。",
    answer: true,
    explanation: "正确。这是软件演化的标准定义。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q19", type: "judge", lecture: 6, topic: "软件测试",
    question: "软件测试仅能在开发完成后进行，不能融入在其他软件生命周期中。",
    answer: false,
    explanation: "错误。软件测试可以融入软件生命周期的各个阶段，如单元测试在编码阶段进行。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q20", type: "judge", lecture: 3, topic: "群体化开发",
    question: "Github 作为开源软件托管平台，由我国管辖，在世界上具有较大影响力。",
    answer: false,
    explanation: "错误。GitHub 由美国微软公司管辖，不是由中国管辖。",
    difficulty: 1, source: "课堂练习题"
  },
  {
    id: "q21", type: "judge", lecture: 3, topic: "过程模型",
    question: "在瀑布模型中，所有阶段都是线性顺序进行，不能回退到前一阶段。",
    answer: false,
    explanation: "错误。瀑布模型虽然主要是线性顺序的，但在实际中可以回退到前一阶段，只是代价很高。",
    difficulty: 2, source: "课堂练习题"
  },
  {
    id: "q22", type: "judge", lecture: 1, topic: "软件分类",
    question: "淘宝、京东、微信这类 App 在人们生活和工作中越来越重要，因此它们可上升为系统软件。",
    answer: false,
    explanation: "错误。淘宝、京东、微信等 App 属于应用软件，不是系统软件。系统软件是管理和控制计算机硬件与系统资源的软件。",
    difficulty: 1, source: "课堂练习题"
  },
  {
    id: "q23", type: "judge", lecture: 5, topic: "用户界面",
    question: "人机交互常见的方式包括文本交互方式、图形化界面交互方式、语音交互方式和姿势交互方式。",
    answer: true,
    explanation: "正确。四种常见的人机交互方式：文本、图形化界面、语音和姿势交互。",
    difficulty: 1, source: "课堂练习题"
  },
  {
    id: "q24", type: "judge", lecture: 1, topic: "开源软件",
    question: "开源软件是一种源代码可以自由获取和传播的计算机软件，其拥有者通过开源许可证赋予被许可人对软件进行使用、修改和传播的权力。",
    answer: true,
    explanation: "正确。这是开源软件的标准定义。",
    difficulty: 1, source: "课堂练习题"
  },
  {
    id: "q25", type: "judge", lecture: 7, topic: "软件维护",
    question: "据统计，在所有维护中纠正性维护所占比重最大。",
    answer: false,
    explanation: "错误。在所有维护中，改善性维护所占比重最大，而非纠正性维护。",
    difficulty: 2, source: "课堂练习题"
  },
  {
    id: "q26", type: "judge", lecture: 7, topic: "软件演化",
    question: "软件演化是指针对软件的大规模功能增强和结构调整，以实现变化的软件需求或提高软件系统的质量。",
    answer: true,
    explanation: "正确。这是软件演化的标准定义。",
    difficulty: 1, source: "课堂练习题"
  },
  {
    id: "q27", type: "judge", lecture: 4, topic: "需求分析",
    question: "需求分析阶段的工作完成后，产生的软件制品包括软件原型、软件需求模型和软件需求文档。",
    answer: true,
    explanation: "正确。需求分析阶段的制品包括软件原型、软件需求模型和软件需求文档。",
    difficulty: 1, source: "课堂练习题"
  },
  {
    id: "q28", type: "judge", lecture: 1, topic: "文档",
    question: "文档是记录软件开发活动和阶段性成果、软件配置及变更等的说明性资料。",
    answer: true,
    explanation: "正确。这是文档的标准定义。",
    difficulty: 1, source: "课堂练习题"
  },
  {
    id: "q29", type: "judge", lecture: 4, topic: "需求分析",
    question: "软件的开发约束需求是指软件的利益相关者对软件的开发成本、交付进度、技术选型、遵循标准及安全性等方面提出的要求。",
    answer: true,
    explanation: "正确。开发约束需求涵盖成本、进度、技术选型、标准和安全性等方面。",
    difficulty: 1, source: "课堂练习题"
  },

  // ===== 名词解释题（2024-2025 试卷）=====
  {
    id: "q30", type: "definition", lecture: 3, topic: "过程模型",
    question: "原型",
    answer: "原型是软件的一个早期可运行版本，用于验证需求或技术方案的可行性。可分为抛弃型原型和演化型原型。",
    difficulty: 1, source: "2025 年试卷"
  },
  {
    id: "q31", type: "definition", lecture: 2, topic: "软件工程概述",
    question: "软件工程",
    answer: "软件工程是将系统化、规范化、可度量的方法应用于软件的开发、运行和维护的过程。其三要素为过程、工具和方法。",
    difficulty: 1, source: "2025 年试卷"
  },
  {
    id: "q32", type: "definition", lecture: 2, topic: "软件工程概述",
    question: "模块化原则",
    answer: "将软件系统划分为若干个相对独立的模块，每个模块完成一个特定的子功能，所有模块按某种方式组装成一个整体。追求高内聚低耦合。",
    difficulty: 1, source: "2025 年试卷"
  },
  {
    id: "q33", type: "definition", lecture: 6, topic: "软件测试",
    question: "软件缺陷",
    answer: "软件缺陷是指程序中存在的错误或缺陷，导致软件不能正确完成预期功能。",
    difficulty: 1, source: "2025 年试卷"
  },
  {
    id: "q34", type: "definition", lecture: 7, topic: "软件维护",
    question: "改善性维护",
    answer: "改善性维护是指为了改进软件的性能、可维护性或其他质量属性而进行的维护活动。",
    difficulty: 1, source: "2025 年试卷"
  },
  {
    id: "q35", type: "definition", lecture: 1, topic: "软件基础",
    question: "软件生存周期",
    answer: "软件生存周期是指软件从概念提出到最终退役的整个过程，包括需求分析、设计、实现、测试、部署、维护与演化等阶段。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q36", type: "definition", lecture: 2, topic: "软件工程概述",
    question: "强（高）内聚低耦合",
    answer: "高内聚指模块内部元素紧密相关，每个模块只完成一个相对独立的特定功能；低耦合指模块间依赖关系尽量少，模块通过简单接口交互。这一原则有助于提高软件的可维护性、可复用性和可测试性。",
    difficulty: 2, source: "2024 年试卷"
  },
  {
    id: "q37", type: "definition", lecture: 6, topic: "软件性能",
    question: "系统响应时间",
    answer: "系统响应时间是指从用户发出请求到系统返回响应结果所经历的时间间隔，是衡量软件系统性能的重要指标之一。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q38", type: "definition", lecture: 6, topic: "软件测试",
    question: "确认测试",
    answer: "确认测试（又称系统测试）是在集成测试完成后，验证软件系统是否满足需求规格的测试活动。测试对象是整个软件系统，依据是需求文档。",
    difficulty: 2, source: "2024 年试卷"
  },
  {
    id: "q39", type: "definition", lecture: 7, topic: "软件维护",
    question: "适应性维护",
    answer: "适应性维护是指为了使软件适应变化的运行环境（如操作系统升级、硬件更换）而进行的维护活动。",
    difficulty: 1, source: "2024 年试卷"
  },
  {
    id: "q40", type: "definition", lecture: 1, topic: "软件分类",
    question: "应用软件/系统软件/支撑软件",
    answer: "系统软件：管理和控制计算机硬件与系统资源的软件（如操作系统）；应用软件：面向特定应用领域，为用户完成具体任务的软件（如微信）；支撑软件：协助开发和维护其他软件的工具软件（如 IDE）。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q41", type: "definition", lecture: 1, topic: "开源软件",
    question: "开源软件",
    answer: "开源软件是一种源代码可以自由获取和传播的计算机软件，其拥有者通过开源许可证赋予被许可人对软件进行使用、修改和传播的权力。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q42", type: "definition", lecture: 2, topic: "软件工程概述",
    question: "信息隐藏原则",
    answer: "模块内部的信息（数据和方法）对外部模块是不可见的，模块只通过接口与外部交互，以降低模块间的依赖，提高可维护性。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q43", type: "definition", lecture: 2, topic: "软件工程概述",
    question: "双向追踪原则",
    answer: "需求与设计之间、设计与代码之间应建立双向追踪关系，确保每个需求都有对应的设计和实现，每个实现都可追溯到需求。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q44", type: "definition", lecture: 3, topic: "群体化开发",
    question: "群体化开发方法",
    answer: "群体化开发方法是指利用大规模群体的智慧和力量来共同完成软件开发任务的方法。典型代表是开源软件开发。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q45", type: "definition", lecture: 4, topic: "需求分析",
    question: "软件需求",
    answer: "软件需求要从两个角度定义：从软件自身角度，包括功能需求和非功能需求；从软件利益相关者角度，包括用户需求和系统需求。描述了软件应该做什么、不做什么，以及质量和约束要求。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q46", type: "definition", lecture: 4, topic: "需求工程",
    question: "需求工程",
    answer: "需求工程是一个包括需求获取、需求分析、需求验证和需求管理的连续过程。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q47", type: "definition", lecture: 4, topic: "需求分析",
    question: "边界类/控制类/实体类",
    answer: "边界类：负责系统与外部参与者之间的交互；控制类：负责业务逻辑控制和协调；实体类：负责持久化数据的存储和管理。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q48", type: "definition", lecture: 5, topic: "软件设计",
    question: "构件",
    answer: "构件是软件系统中可独立部署、可替换的组成部分，它遵循一组公开的接口规范，可以被其他软件组件复用和组合。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q49", type: "definition", lecture: 6, topic: "软件实现",
    question: "软件实现（的任务）",
    answer: "软件实现的任务是将软件设计转化为可执行的程序代码，包括编码、单元测试和代码审查等活动。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q50", type: "definition", lecture: 6, topic: "软件测试",
    question: "安全性测试",
    answer: "安全性测试是验证软件系统的安全防护措施是否有效，能否抵御未授权访问和攻击的测试活动。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q51", type: "definition", lecture: 6, topic: "软件测试",
    question: "回归测试",
    answer: "回归测试是在软件修改后重新执行之前的测试用例，以确保修改没有引入新的缺陷并且原有功能仍然正常工作。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q52", type: "definition", lecture: 6, topic: "软件测试",
    question: "软件 beta 版",
    answer: "软件 beta 版是在用户实际使用环境中进行公开测试的软件版本，由用户独立使用并反馈问题。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q53", type: "definition", lecture: 6, topic: "软件部署",
    question: "软件部署",
    answer: "软件部署是将开发完成的软件系统安装到运行环境并使其可用的过程。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q54", type: "definition", lecture: 7, topic: "软件维护",
    question: "纠正性维护",
    answer: "纠正性维护是指在软件交付后，为修复已发现的缺陷而进行的维护活动。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q55", type: "definition", lecture: 7, topic: "软件维护",
    question: "软件逻辑老化",
    answer: "软件逻辑老化是指软件在长期运行过程中，由于外部环境变化或业务需求变化，导致原有逻辑不再适用的现象。它不是物理老化，是逻辑层面的老化。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q56", type: "definition", lecture: 4, topic: "需求分析",
    question: "软件系统的利益相关方",
    answer: "软件系统的利益相关方是指与软件系统有利益关系的个人或组织，包括软件的受益者（客户、用户）、开发者、测试人员，以及与软件交互的其他系统。",
    difficulty: 2, source: "复习材料"
  },

  // ===== 简答题（2024-2025 试卷 + 复习材料）=====
  {
    id: "q57", type: "short", lecture: 4, topic: "需求工程",
    question: "请写出需求工程的一般性过程。",
    answer: "需求工程包括四个连续过程：1.需求获取：从利益相关者收集需求；2.需求分析：分析和整理需求，建立需求模型；3.需求验证：确认需求的正确性和完整性；4.需求管理：管理需求变更。",
    difficulty: 2, source: "2025 年试卷"
  },
  {
    id: "q58", type: "short", lecture: 6, topic: "编码",
    question: "请结合例子写出编写高质量代码要注意的问题（至少写 5 条）。",
    answer: "编码原则：1.可读性优先（变量名见名知意，如用 studentCount 而非 sc）；2.可维护性（避免硬编码，使用常量）；3.效率（避免不必要的循环嵌套）。编码风格：4.标识符命名规范（不使用保留字，长度适当，统一驼峰或下划线风格）；5.适当的注释（解释复杂逻辑，而非重复代码）。",
    difficulty: 2, source: "2025 年试卷"
  },
  {
    id: "q59", type: "short", lecture: 5, topic: "软件设计",
    question: "请给出软件设计模型中的设计元素，并对它们分别加以解释。",
    answer: "软件设计模型中的设计元素包括：1.边界类：处理系统与外部参与者之间的交互；2.控制类：实现业务逻辑和控制流程；3.实体类：管理持久化数据的存储。分别对应边界层、控制层和实体层。",
    difficulty: 2, source: "2025 年试卷"
  },
  {
    id: "q60", type: "short", lecture: 6, topic: "软件测试",
    question: "请写出 alpha 测试和 beta 测试的联系与区别。",
    answer: "Alpha 测试在开发者控制的环境中进行，开发者在场观察用户操作；Beta 测试在用户实际使用环境中进行，用户独立使用并反馈问题。Alpha 先于 Beta 进行。两者都是验收测试的形式，目的是发现只有用户才能发现的缺陷。",
    difficulty: 2, source: "2025 年试卷"
  },
  {
    id: "q61", type: "short", lecture: 1, topic: "开源软件",
    question: "什么是开源软件，其和闭源软件相比，有什么优势和不足？",
    answer: "开源软件是源代码可以自由获取和传播的软件，通过开源许可证授权。优势：透明度高、社区支持强、可定制性好、成本低。不足：安全风险（代码公开可能被利用）、维护依赖社区、可能缺乏商业支持、文档可能不完善。",
    difficulty: 2, source: "2024 年试卷"
  },
  {
    id: "q62", type: "short", lecture: 6, topic: "编码",
    question: "编写程序代码时，标识符命名应该注意什么问题（至少写出 5 条）。",
    answer: "1.见名知意（如 studentCount 而非 sc）；2.不使用编程语言保留字；3.长度适当，不宜过长或过短；4.统一命名风格（如统一驼峰命名法）；5.避免使用易混淆的字符（如 l 和 1，O 和 0）。",
    difficulty: 2, source: "2024 年试卷"
  },
  {
    id: "q63", type: "short", lecture: 5, topic: "软件设计",
    question: "请完整写出软件设计的一般过程。",
    answer: "软件设计的一般过程：1.体系结构设计（确定系统总体结构）；2.用户界面设计（设计人机交互界面）；3.详细设计，包括：用例设计→类设计→数据设计。",
    difficulty: 2, source: "2024 年试卷"
  },
  {
    id: "q64", type: "short", lecture: 6, topic: "软件测试",
    question: "写出软件测试 V 模型的三种测试，和它们的测试对象是什么？",
    answer: "V 模型将测试活动与开发活动对应起来：单元测试对应编码阶段，测试对象是程序模块；集成测试对应设计阶段，测试对象是模块间接口；确认测试（系统测试）对应需求阶段，测试对象是系统功能。V 模型左侧是开发，右侧是测试。",
    difficulty: 2, source: "2024 年试卷"
  },
  {
    id: "q65", type: "short", lecture: 1, topic: "软件基础",
    question: "请结合例子解释文档重要性。",
    answer: "文档是记录软件开发活动和阶段性成果、软件配置及变更等的说明性资料。例如：需求文档确保开发团队和客户对需求理解一致；设计文档为后续开发和维护提供参考；测试文档记录测试过程和结果，便于追溯。文档有助于团队协作、知识传承和软件维护。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q66", type: "short", lecture: 1, topic: "软件基础",
    question: "软件的客户和用户两个概念有什么区别？",
    answer: "客户是购买或委托开发软件的人或组织，负责决定需求、验收软件；用户是实际使用软件的人，关注软件的易用性和功能性。客户和用户可以是同一人，也可以不同。需求分析要兼顾两者。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q67", type: "short", lecture: 3, topic: "过程模型",
    question: "请写出瀑布模型的特点和局限。",
    answer: "特点：线性顺序进行，各阶段按固定顺序依次进行；文档驱动，阶段明确；前一阶段完成后才能进入下一阶段。局限：难以适应需求变化；后期才发现设计问题，修改代价高；用户只能在最后看到产品，风险大。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q68", type: "short", lecture: 3, topic: "过程模型",
    question: "请写出瀑布模型、原型模型、增量模型和迭代模型各自的指导思想、关注点和适用的软件类型。",
    answer: "瀑布模型：指导思想是文档驱动，关注阶段完整性，适合需求明确的项目。原型模型：指导思想是快速验证，关注需求确认，适合需求不明确的项目。增量模型：指导思想是分批交付，关注功能逐步增加，适合可分块交付的系统。迭代模型：指导思想是反复改进，关注逐步完善，适合需求会变化的项目。",
    difficulty: 3, source: "复习材料"
  },
  {
    id: "q69", type: "short", lecture: 3, topic: "过程模型",
    question: "请介绍增量模型和迭代模型，并说出它们的异同。",
    answer: "增量模型：将软件分成多个增量（批次）开发和交付，每个增量增加新功能。迭代模型：对软件进行反复改进，每次迭代完善已有功能。相同点：都是分阶段开发，都支持需求变化。不同点：增量模型每次增加新功能（横向扩展），迭代模型每次改进已有功能（纵向深化）。",
    difficulty: 3, source: "复习材料"
  },
  {
    id: "q70", type: "short", lecture: 3, topic: "群体化开发",
    question: "群体化开发方法中的 issue 中文意思是什么？它在开发中具体指什么？",
    answer: "issue 中文意思是'问题'或'议题'。在群体化开发中，issue 具体指开发过程中的问题报告、功能请求或任务项，用于跟踪和管理开发进度。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q71", type: "short", lecture: 3, topic: "群体化开发",
    question: "版本管理中的分支是指什么？master 分支和 develop 分支有什么区别？",
    answer: "分支是版本管理中从主线分出的独立开发线路。master 分支是主分支，存放稳定可发布的代码；develop 分支是开发分支，存放最新的开发成果。master 分支的代码通常是经过测试可以发布的版本。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q72", type: "short", lecture: 4, topic: "需求分析",
    question: "请给出软件需求的类别并分别介绍它们。",
    answer: "软件需求分为：功能需求（软件应该做什么）、非功能需求（性能、安全性、可用性等质量要求）、开发约束需求（成本、进度、技术选型、遵循标准及安全性等方面的要求）。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q73", type: "short", lecture: 4, topic: "需求分析",
    question: "请写出获取软件需求的步骤。",
    answer: "获取软件需求的步骤包括：1.识别利益相关者；2.确定需求获取方式；3.收集需求信息；4.整理和分析需求；5.形成需求文档。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q74", type: "short", lecture: 4, topic: "需求分析",
    question: "请写出分析软件需求的具体步骤。",
    answer: "分析软件需求的步骤包括：1.建立分析模型；2.识别边界类、控制类和实体类；3.建立用例交互模型（顺序图）；4.建立分析类图模型。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q75", type: "short", lecture: 4, topic: "需求分析",
    question: "在分析软件需求时，请解释何为控制类和实体类。",
    answer: "控制类：负责业务逻辑控制和协调，处理用例中的控制流程，协调边界类和实体类之间的交互。实体类：负责持久化数据的存储和管理，代表系统中的业务数据对象。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q76", type: "short", lecture: 5, topic: "软件设计",
    question: "请写出面向对象的软件设计过程。",
    answer: "面向对象的软件设计过程包括：1.用例设计：基于用例模型设计交互流程；2.类设计：定义类的属性、方法和关系；3.数据设计：设计数据存储方案；4.体系结构设计：定义系统总体结构和构件关系。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q77", type: "short", lecture: 5, topic: "软件体系结构",
    question: "软件体系结构设计的任务是什么？",
    answer: "软件体系结构设计的任务是：确定系统的总体结构，定义子系统或构件及其相互关系，体现系统最早的设计决策，直接决定整个软件系统的质量。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q78", type: "short", lecture: 5, topic: "软件设计",
    question: "请写出你对'高内聚 - 低耦合'原则的理解。",
    answer: "高内聚指模块内部元素紧密相关，每个模块只完成一个相对独立的特定功能；低耦合指模块间依赖关系尽量少，模块通过简单接口交互。这一原则有助于提高软件的可维护性、可复用性和可测试性。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q79", type: "short", lecture: 5, topic: "用户界面",
    question: "请写出用户界面的设计过程。",
    answer: "用户界面设计过程包括：1.需求分析：了解用户需求和交互场景；2.设计：设计界面布局、导航和交互方式；3.实现：编码实现用户界面；4.评估：测试和评估用户体验，收集反馈改进。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q80", type: "short", lecture: 5, topic: "用户界面",
    question: "请写出四种人机交互的方式。",
    answer: "四种人机交互方式：1.文本交互方式（命令行界面）；2.图形化界面交互方式（GUI）；3.语音交互方式；4.姿势交互方式。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q81", type: "short", lecture: 6, topic: "软件测试",
    question: "请写出软件测试的原理。",
    answer: "软件测试是通过运行程序代码来发现程序中潜藏缺陷的过程。测试可以证明软件存在缺陷，但不能证明软件是正确的。测试的对象是程序代码。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q82", type: "short", lecture: 6, topic: "软件测试",
    question: "描述测试用例需要包括哪四个元素。",
    answer: "测试用例由四元组 (T, S, I, O) 表示：T-测试用例标识，S-前置条件，I-测试输入，O-预期输出。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q83", type: "short", lecture: 6, topic: "软件测试",
    question: "单元测试的依据和任务是什么？",
    answer: "单元测试的依据是详细设计文档；任务是验证模块内部逻辑的正确性，确保每个模块按设计要求正确工作。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q84", type: "short", lecture: 6, topic: "软件测试",
    question: "集成测试和确认测试的依据、参与者分别是什么？",
    answer: "集成测试：依据设计文档，参与者是开发团队，测试模块间接口。确认测试：依据需求文档，参与者包括用户/客户，测试系统功能是否满足需求。",
    difficulty: 2, source: "复习材料"
  },

  // ===== 补充选择题（基于 PPT 和教材内容）=====
  {
    id: "q85", type: "choice", lecture: 1, topic: "软件基础",
    question: "下列关于软件的描述中，哪一项是错误的？",
    options: {
      A: "软件不会物理老化，但会逻辑老化",
      B: "软件的生产受物理定律约束",
      C: "软件是逻辑制品而非物理制品",
      D: "软件客户常最初说不清楚需求"
    },
    answer: "B",
    explanation: "软件及其生产不受物理定律约束，这是软件区别于传统物理产品的重要特点。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q86", type: "choice", lecture: 1, topic: "软件分类",
    question: "Windows 操作系统属于哪类软件？",
    options: {
      A: "系统软件",
      B: "应用软件",
      C: "支撑软件",
      D: "开源软件"
    },
    answer: "A",
    explanation: "Windows 操作系统是系统软件，负责管理和控制计算机硬件与系统资源。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q87", type: "choice", lecture: 1, topic: "软件分类",
    question: "Visual Studio IDE 属于哪类软件？",
    options: {
      A: "系统软件",
      B: "应用软件",
      C: "支撑软件",
      D: "商业软件"
    },
    answer: "C",
    explanation: "Visual Studio IDE 是支撑软件，协助开发和维护其他软件的工具软件。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q88", type: "choice", lecture: 2, topic: "软件工程概述",
    question: "软件工程的三要素是什么？",
    options: {
      A: "过程、工具、方法",
      B: "需求、设计、编码",
      C: "计划、组织、控制",
      D: "模型、方法、工具"
    },
    answer: "A",
    explanation: "软件工程三要素是：过程、工具、方法。这是软件工程的基础概念。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q89", type: "choice", lecture: 3, topic: "过程模型",
    question: "下列哪种过程模型适合需求不明确的项目？",
    options: {
      A: "瀑布模型",
      B: "原型模型",
      C: "V 模型",
      D: "增量模型"
    },
    answer: "B",
    explanation: "原型模型的指导思想是快速验证，关注需求确认，适合需求不明确的项目。",
    difficulty: 2, source: "课堂练习"
  },
  {
    id: "q90", type: "choice", lecture: 3, topic: "过程模型",
    question: "下列哪种过程模型是文档驱动的？",
    options: {
      A: "原型模型",
      B: "敏捷开发",
      C: "瀑布模型",
      D: "迭代模型"
    },
    answer: "C",
    explanation: "瀑布模型是文档驱动的，各阶段按固定顺序依次进行，前一阶段完成后才能进入下一阶段。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q91", type: "choice", lecture: 3, topic: "群体化开发",
    question: "GitHub 是由哪家公司管辖的？",
    options: {
      A: "Google",
      B: "Microsoft",
      C: "Apple",
      D: "Amazon"
    },
    answer: "B",
    explanation: "GitHub 由美国微软公司管辖，不是由中国管辖。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q92", type: "choice", lecture: 4, topic: "需求分析",
    question: "软件需求不包括下列哪一项？",
    options: {
      A: "功能需求",
      B: "非功能需求",
      C: "开发约束需求",
      D: "代码行数需求"
    },
    answer: "D",
    explanation: "软件需求包括功能需求、非功能需求和开发约束需求，不包括代码行数需求。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q93", type: "choice", lecture: 4, topic: "需求工程",
    question: "需求工程的第一个过程是什么？",
    options: {
      A: "需求获取",
      B: "需求分析",
      C: "需求验证",
      D: "需求管理"
    },
    answer: "A",
    explanation: "需求工程包括四个连续过程：需求获取、需求分析、需求验证、需求管理。第一个过程是需求获取。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q94", type: "choice", lecture: 4, topic: "需求分析",
    question: "在需求分析中，负责系统与外部参与者交互的类是？",
    options: {
      A: "边界类",
      B: "控制类",
      C: "实体类",
      D: "接口类"
    },
    answer: "A",
    explanation: "边界类负责系统与外部参与者之间的交互；控制类负责业务逻辑控制；实体类负责数据存储。",
    difficulty: 2, source: "课堂练习"
  },
  {
    id: "q95", type: "choice", lecture: 5, topic: "软件设计",
    question: "软件设计的第一步是什么？",
    options: {
      A: "体系结构设计",
      B: "用户界面设计",
      C: "用例设计",
      D: "类设计"
    },
    answer: "A",
    explanation: "软件设计的一般过程：1.体系结构设计；2.用户界面设计；3.详细设计（用例设计→类设计→数据设计）。",
    difficulty: 2, source: "课堂练习"
  },
  {
    id: "q96", type: "choice", lecture: 5, topic: "软件设计",
    question: "高内聚低耦合原则中，高内聚是指？",
    options: {
      A: "模块间依赖关系少",
      B: "模块内部元素紧密相关",
      C: "模块接口简单",
      D: "模块功能复杂"
    },
    answer: "B",
    explanation: "高内聚指模块内部元素紧密相关，每个模块只完成一个相对独立的特定功能；低耦合指模块间依赖关系尽量少。",
    difficulty: 2, source: "课堂练习"
  },
  {
    id: "q97", type: "choice", lecture: 6, topic: "软件测试",
    question: "下列哪种测试在开发者的控制环境下进行？",
    options: {
      A: "Alpha 测试",
      B: "Beta 测试",
      C: "单元测试",
      D: "集成测试"
    },
    answer: "A",
    explanation: "Alpha 测试在开发者控制的环境中进行，开发者在场观察用户操作；Beta 测试在用户实际使用环境中进行。",
    difficulty: 2, source: "课堂练习"
  },
  {
    id: "q98", type: "choice", lecture: 6, topic: "软件测试",
    question: "V 模型中，单元测试对应哪个开发阶段？",
    options: {
      A: "需求分析阶段",
      B: "设计阶段",
      C: "编码阶段",
      D: "部署阶段"
    },
    answer: "C",
    explanation: "V 模型将测试活动与开发活动对应起来：单元测试对应编码阶段，集成测试对应设计阶段，确认测试对应需求阶段。",
    difficulty: 2, source: "课堂练习"
  },
  {
    id: "q99", type: "choice", lecture: 7, topic: "软件维护",
    question: "在所有维护中，哪种维护所占比重最大？",
    options: {
      A: "纠正性维护",
      B: "改善性维护",
      C: "适应性维护",
      D: "预防性维护"
    },
    answer: "B",
    explanation: "在所有维护中，改善性维护所占比重最大，而非纠正性维护。",
    difficulty: 2, source: "课堂练习"
  },
  {
    id: "q100", type: "choice", lecture: 7, topic: "软件维护",
    question: "为了使软件适应操作系统升级而进行的维护是？",
    options: {
      A: "纠正性维护",
      B: "改善性维护",
      C: "适应性维护",
      D: "预防性维护"
    },
    answer: "C",
    explanation: "适应性维护是指为了使软件适应变化的运行环境（如操作系统升级、硬件更换）而进行的维护活动。",
    difficulty: 1, source: "课堂练习"
  },

  // ===== 补充判断题（基于 PPT 和教材内容）=====
  {
    id: "q101", type: "judge", lecture: 1, topic: "软件基础",
    question: "软件会物理老化，需要定期更换。",
    answer: false,
    explanation: "错误。软件不会物理老化，但会逻辑老化。软件是逻辑制品，不受物理定律约束。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q102", type: "judge", lecture: 1, topic: "软件基础",
    question: "软件的生产方式与传统物理产品相同。",
    answer: false,
    explanation: "错误。软件的生产方式与传统物理产品不同，软件是逻辑制品，其生产不受物理定律约束。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q103", type: "judge", lecture: 1, topic: "软件分类",
    question: "微信属于应用软件。",
    answer: true,
    explanation: "正确。微信是面向特定应用领域，为用户完成具体任务的应用软件。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q104", type: "judge", lecture: 2, topic: "软件工程概述",
    question: "软件工程三要素是过程、工具和方法。",
    answer: true,
    explanation: "正确。软件工程三要素是：过程、工具、方法。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q105", type: "judge", lecture: 3, topic: "过程模型",
    question: "瀑布模型适合需求明确的项目。",
    answer: true,
    explanation: "正确。瀑布模型是文档驱动的，关注阶段完整性，适合需求明确的项目。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q106", type: "judge", lecture: 3, topic: "过程模型",
    question: "原型模型适合需求不明确的项目。",
    answer: true,
    explanation: "正确。原型模型的指导思想是快速验证，关注需求确认，适合需求不明确的项目。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q107", type: "judge", lecture: 3, topic: "群体化开发",
    question: "开源软件开发是群体化开发方法的典型代表。",
    answer: true,
    explanation: "正确。群体化开发方法是指利用大规模群体的智慧和力量来共同完成软件开发任务，典型代表是开源软件开发。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q108", type: "judge", lecture: 4, topic: "需求分析",
    question: "软件需求只包括功能需求。",
    answer: false,
    explanation: "错误。软件需求包括功能需求、非功能需求和开发约束需求三类。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q109", type: "judge", lecture: 4, topic: "需求工程",
    question: "需求工程包括需求获取、需求分析、需求验证和需求管理四个过程。",
    answer: true,
    explanation: "正确。需求工程包括这四个连续过程。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q110", type: "judge", lecture: 4, topic: "需求分析",
    question: "控制类负责系统与外部参与者之间的交互。",
    answer: false,
    explanation: "错误。边界类负责系统与外部参与者之间的交互；控制类负责业务逻辑控制和协调。",
    difficulty: 2, source: "课堂练习"
  },
  {
    id: "q111", type: "judge", lecture: 5, topic: "软件设计",
    question: "软件设计的第一步是体系结构设计。",
    answer: true,
    explanation: "正确。软件设计的一般过程：1.体系结构设计；2.用户界面设计；3.详细设计。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q112", type: "judge", lecture: 5, topic: "软件设计",
    question: "高内聚低耦合原则有助于提高软件的可维护性。",
    answer: true,
    explanation: "正确。高内聚低耦合原则有助于提高软件的可维护性、可复用性和可测试性。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q113", type: "judge", lecture: 5, topic: "UML",
    question: "UML 是一种用于软件设计的标准建模语言。",
    answer: true,
    explanation: "正确。UML 是软件设计的标准建模语言。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q114", type: "judge", lecture: 6, topic: "软件测试",
    question: "软件测试可以证明软件是正确的。",
    answer: false,
    explanation: "错误。软件测试可以发现缺陷，但不能证明软件是正确的。这是测试的基本原理。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q115", type: "judge", lecture: 6, topic: "软件测试",
    question: "Alpha 测试在用户实际使用环境中进行。",
    answer: false,
    explanation: "错误。Alpha 测试在开发者控制的环境中进行；Beta 测试在用户实际使用环境中进行。",
    difficulty: 2, source: "课堂练习"
  },
  {
    id: "q116", type: "judge", lecture: 6, topic: "软件测试",
    question: "Beta 测试由用户独立使用并反馈问题。",
    answer: true,
    explanation: "正确。Beta 测试是在用户实际使用环境中进行公开测试的软件版本，由用户独立使用并反馈问题。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q117", type: "judge", lecture: 7, topic: "软件维护",
    question: "软件维护只包括纠正性维护。",
    answer: false,
    explanation: "错误。软件维护包括纠正性维护、改善性维护和适应性维护三种类型。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q118", type: "judge", lecture: 7, topic: "软件维护",
    question: "改善性维护是为了改进软件的性能和可维护性。",
    answer: true,
    explanation: "正确。改善性维护是指为了改进软件的性能、可维护性或其他质量属性而进行的维护活动。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q119", type: "judge", lecture: 7, topic: "软件演化",
    question: "软件演化是指针对软件的大规模功能增强和结构调整。",
    answer: true,
    explanation: "正确。软件演化是指针对软件的大规模功能增强和结构调整，以实现变化的软件需求或提高软件系统的质量。",
    difficulty: 1, source: "课堂练习"
  },
  {
    id: "q120", type: "judge", lecture: 7, topic: "软件维护",
    question: "软件逻辑老化是物理层面的老化。",
    answer: false,
    explanation: "错误。软件逻辑老化是指软件在长期运行过程中，由于外部环境变化或业务需求变化，导致原有逻辑不再适用的现象。它不是物理老化，是逻辑层面的老化。",
    difficulty: 2, source: "课堂练习"
  },

  // ===== 补充名词解释（基于复习材料）=====
  {
    id: "q121", type: "definition", lecture: 2, topic: "软件工程概述",
    question: "信息隐藏原则",
    answer: "模块内部的信息（数据和方法）对外部模块是不可见的，模块只通过接口与外部交互，以降低模块间的依赖，提高可维护性。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q122", type: "definition", lecture: 2, topic: "软件工程概述",
    question: "双向追踪原则",
    answer: "需求与设计之间、设计与代码之间应建立双向追踪关系，确保每个需求都有对应的设计和实现，每个实现都可追溯到需求。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q123", type: "definition", lecture: 3, topic: "群体化开发",
    question: "群体化开发方法",
    answer: "群体化开发方法是指利用大规模群体的智慧和力量来共同完成软件开发任务的方法。典型代表是开源软件开发。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q124", type: "definition", lecture: 4, topic: "需求分析",
    question: "边界类",
    answer: "边界类负责系统与外部参与者之间的交互，处理用户输入和系统输出。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q125", type: "definition", lecture: 4, topic: "需求分析",
    question: "控制类",
    answer: "控制类负责业务逻辑控制和协调，处理用例中的控制流程，协调边界类和实体类之间的交互。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q126", type: "definition", lecture: 4, topic: "需求分析",
    question: "实体类",
    answer: "实体类负责持久化数据的存储和管理，代表系统中的业务数据对象。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q127", type: "definition", lecture: 5, topic: "软件设计",
    question: "构件",
    answer: "构件是软件系统中可独立部署、可替换的组成部分，它遵循一组公开的接口规范，可以被其他软件组件复用和组合。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q128", type: "definition", lecture: 6, topic: "软件测试",
    question: "回归测试",
    answer: "回归测试是在软件修改后重新执行之前的测试用例，以确保修改没有引入新的缺陷并且原有功能仍然正常工作。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q129", type: "definition", lecture: 7, topic: "软件维护",
    question: "纠正性维护",
    answer: "纠正性维护是指在软件交付后，为修复已发现的缺陷而进行的维护活动。",
    difficulty: 1, source: "复习材料"
  },
  {
    id: "q130", type: "definition", lecture: 7, topic: "软件维护",
    question: "软件逻辑老化",
    answer: "软件逻辑老化是指软件在长期运行过程中，由于外部环境变化或业务需求变化，导致原有逻辑不再适用的现象。它不是物理老化，是逻辑层面的老化。",
    difficulty: 2, source: "复习材料"
  },

  // ===== 补充简答题（基于复习材料和作业）=====
  {
    id: "q131", type: "short", lecture: 1, topic: "软件基础",
    question: "请解释软件不会物理老化但会逻辑老化的含义。",
    answer: "软件不会物理老化是指软件作为逻辑制品，不受物理定律约束，不会因为常年运行而出现物理层面的老化或磨损。但软件会逻辑老化，是指在长期运行过程中，由于外部环境变化（如操作系统升级、硬件更换）或业务需求变化，导致原有逻辑不再适用的现象。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q132", type: "short", lecture: 1, topic: "软件基础",
    question: "什么是软件利益相关者？包括哪些人？",
    answer: "软件利益相关者是指与软件系统有利益关系的个人或组织。包括：软件的受益者（客户、用户）、开发者和测试人员、以及与软件交互的其他系统（如物理硬件系统、遗留系统）。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q133", type: "short", lecture: 2, topic: "软件工程概述",
    question: "什么是模块化原则？为什么要追求高内聚低耦合？",
    answer: "模块化原则是将软件系统划分为若干个相对独立的模块，每个模块完成一个特定的子功能，所有模块按某种方式组装成一个整体。追求高内聚低耦合是因为：高内聚使每个模块功能单一明确，易于理解和维护；低耦合减少模块间依赖，降低修改一个模块对其他模块的影响，提高软件的可维护性、可复用性和可测试性。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q134", type: "short", lecture: 3, topic: "过程模型",
    question: "请比较增量模型和迭代模型的异同。",
    answer: "相同点：都是分阶段开发，都支持需求变化。不同点：增量模型每次增加新功能（横向扩展），指导思想是分批交付，关注功能逐步增加；迭代模型每次改进已有功能（纵向深化），指导思想是反复改进，关注逐步完善。增量模型适合可分块交付的系统，迭代模型适合需求会变化的项目。",
    difficulty: 3, source: "复习材料"
  },
  {
    id: "q135", type: "short", lecture: 3, topic: "群体化开发",
    question: "什么是 issue？它在群体化开发中起什么作用？",
    answer: "issue 中文意思是'问题'或'议题'。在群体化开发中，issue 具体指开发过程中的问题报告、功能请求或任务项，用于跟踪和管理开发进度。通过 issue 可以记录 bug、提出新功能建议、分配任务给开发者，是群体化开发中重要的协作工具。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q136", type: "short", lecture: 4, topic: "需求分析",
    question: "请解释功能需求、非功能需求和开发约束需求的区别。",
    answer: "功能需求描述软件应该做什么，即软件的功能；非功能需求描述软件的质量要求，如性能、安全性、可用性等；开发约束需求描述对软件开发的限制，如成本、进度、技术选型、遵循标准及安全性等方面的要求。功能需求关注'做什么'，非功能需求关注'做得怎么样'，开发约束需求关注'如何开发'。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q137", type: "short", lecture: 4, topic: "需求工程",
    question: "需求获取的步骤是什么？",
    answer: "需求获取的步骤包括：1.识别利益相关者：确定与软件系统有利益关系的个人或组织；2.确定需求获取方式：如访谈、问卷、观察、工作坊等；3.收集需求信息：从利益相关者处收集需求；4.整理和分析需求：对收集到的需求进行分类、优先级排序；5.形成需求文档：将需求整理成文档，供后续开发使用。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q138", type: "short", lecture: 4, topic: "需求分析",
    question: "分析软件需求的步骤是什么？",
    answer: "分析软件需求的步骤包括：1.建立分析模型：理解系统功能和交互；2.识别边界类、控制类和实体类：边界类处理系统交互，控制类处理业务逻辑，实体类管理数据；3.建立用例交互模型（顺序图）：描述用例中对象之间的交互顺序；4.建立分析类图模型：定义类的属性、方法和关系。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q139", type: "short", lecture: 5, topic: "软件设计",
    question: "请解释边界类、控制类和实体类的作用。",
    answer: "边界类：负责系统与外部参与者之间的交互，处理用户输入和系统输出；控制类：负责业务逻辑控制和协调，处理用例中的控制流程，协调边界类和实体类之间的交互；实体类：负责持久化数据的存储和管理，代表系统中的业务数据对象。这三种类分别对应边界层、控制层和实体层。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q140", type: "short", lecture: 5, topic: "软件体系结构",
    question: "软件体系结构设计的重要性是什么？",
    answer: "软件体系结构设计的重要性体现在：1.确定系统的总体结构，定义子系统或构件及其相互关系；2.体现系统最早的设计决策，这些决策往往难以更改；3.直接决定整个软件系统的质量，如可扩展性、可维护性、性能等；4.为编码实现工作提供具体指导。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q141", type: "short", lecture: 6, topic: "软件测试",
    question: "请解释 V 模型的含义。",
    answer: "V 模型将测试活动与开发活动对应起来，形成 V 字形：V 模型左侧是开发活动，右侧是测试活动。单元测试对应编码阶段，测试对象是程序模块；集成测试对应设计阶段，测试对象是模块间接口；确认测试（系统测试）对应需求阶段，测试对象是系统功能。V 模型强调测试计划的重要性，每个开发阶段都有对应的测试阶段。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q142", type: "short", lecture: 6, topic: "软件测试",
    question: "请比较 Alpha 测试和 Beta 测试。",
    answer: "Alpha 测试在开发者控制的环境中进行，开发者在场观察用户操作，记录问题；Beta 测试在用户实际使用环境中进行，用户独立使用并反馈问题。Alpha 先于 Beta 进行，Alpha 测试环境更接近开发环境，Beta 测试环境是真实的用户环境。两者都是验收测试的形式，目的是发现只有用户才能发现的缺陷。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q143", type: "short", lecture: 7, topic: "软件维护",
    question: "请解释纠正性维护、改善性维护和适应性维护的区别。",
    answer: "纠正性维护是指在软件交付后，为修复已发现的缺陷而进行的维护活动；改善性维护是指为了改进软件的性能、可维护性或其他质量属性而进行的维护活动；适应性维护是指为了使软件适应变化的运行环境（如操作系统升级、硬件更换）而进行的维护活动。纠正性维护修复错误，改善性维护改进功能，适应性维护适应环境变化。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q144", type: "short", lecture: 7, topic: "软件演化",
    question: "什么是软件演化？为什么需要软件演化？",
    answer: "软件演化是指针对软件的大规模功能增强和结构调整，以实现变化的软件需求或提高软件系统的质量。需要软件演化的原因：1.业务需求变化，需要增加新功能；2.技术环境变化，需要适应新的操作系统、硬件等；3.用户数量增加，需要提高性能；4.发现安全漏洞，需要加强安全性。软件演化是软件生命周期的必然阶段。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q145", type: "short", lecture: 4, topic: "需求分析",
    question: "请解释需求文档的重要性。",
    answer: "需求文档的重要性体现在：1.确保开发团队和客户对需求理解一致，避免误解；2.为后续设计和开发提供依据，指导开发工作；3.作为测试的依据，验证软件是否满足需求；4.为软件维护提供参考，帮助理解原有需求；5.作为项目验收的标准。需求文档是软件开发过程中最重要的文档之一。",
    difficulty: 2, source: "复习材料"
  },

  // ===== 作业题（基于作业答案）=====
  {
    id: "q146", type: "short", lecture: 4, topic: "需求分析",
    question: "在需求描述中，'用户在使用系统之前必须注册'这句话有什么问题？",
    answer: "这句话有问题，'使用'二字比较具体指代不是很准确，其实是使用之前必须登录，登录之前要已经注册过。应该改为'用户在使用系统前必须登录，登录前必须已经注册过'。",
    difficulty: 2, source: "作业"
  },
  {
    id: "q147", type: "short", lecture: 4, topic: "需求分析",
    question: "在需求描述中，'用户注册必须提供用户名、账号和用户类别'这句话有什么问题？",
    answer: "这句话有问题：1.'用户名'和'账号'是一回事，账号即用户名，重复了；2.'用户类别'没有说清楚有哪些，比如这个软件也许是'学生、教师和管理员'三类；3.用户注册还必须提供密码，这句话漏掉了密码。",
    difficulty: 2, source: "作业"
  },
  {
    id: "q148", type: "short", lecture: 6, topic: "软件测试",
    question: "基本路径测试方法中，如何计算基本路径数量？",
    answer: "基本路径数量 = 边的数量 - 节点的数量 + 2。这是 McCabe 环路复杂度的计算公式。例如，如果流图有 6 条边和 5 个节点，则基本路径数量为 6-5+2=3 条。",
    difficulty: 2, source: "作业"
  },
  {
    id: "q149", type: "short", lecture: 6, topic: "软件测试",
    question: "等价类划分方法中，如何设计测试用例？",
    answer: "等价类划分方法设计测试用例的原则：1.用尽可能少的测试用例覆盖尽可能多的有效等价类；2.为每个无效等价类设计 1 个测试用例。这样可以确保测试用例数量最少，同时覆盖所有等价类。有效等价类是指符合需求的输入，无效等价类是指不符合需求的输入。",
    difficulty: 2, source: "作业"
  },
  {
    id: "q150", type: "short", lecture: 5, topic: "软件设计",
    question: "在 UML 类图中，依赖关系和关联关系有什么区别？",
    answer: "依赖关系表示一个类使用另一个类的功能，但不直接持有对方的实例。它是一种临时的、弱的关系，通常用于方法调用。关联关系表示一个类直接持有另一个类的实例，并与之交互。它是一种持久的、强的关系，表示类之间的直接联系。依赖关系用虚线箭头表示，关联关系用实线表示。",
    difficulty: 3, source: "复习材料"
  },
  {
    id: "q151", type: "short", lecture: 6, topic: "编码",
    question: "请写出 5 条标识符命名规范。",
    answer: "1.见名知意：变量名应该有意义，如用 studentCount 而非 sc；2.不使用编程语言保留字：如不能用 class、int 等作为变量名；3.长度适当：不宜过长或过短，要在可读性和简洁性之间平衡；4.统一命名风格：如统一使用驼峰命名法（studentCount）或下划线命名法（student_count）；5.避免使用易混淆的字符：如 l 和 1，O 和 0，避免造成阅读困难。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q152", type: "short", lecture: 6, topic: "软件测试",
    question: "请解释黑盒测试和白盒测试的区别。",
    answer: "黑盒测试（功能测试）：不关注程序内部结构，只关注程序的功能是否符合需求。测试用例基于需求和规格说明设计。常用方法有等价类划分、边界值分析等。白盒测试（结构测试）：关注程序内部结构和逻辑，测试用例基于程序代码设计。常用方法有语句覆盖、分支覆盖、基本路径测试等。黑盒测试在系统测试阶段使用，白盒测试在单元测试阶段使用。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q153", type: "short", lecture: 6, topic: "软件测试",
    question: "请解释等价类划分方法的基本思想。",
    answer: "等价类划分方法的基本思想是将输入数据划分为若干个等价类，每个等价类中的所有输入数据对程序的处理逻辑是等价的。从每个等价类中选取少数代表性数据作为测试用例。等价类分为有效等价类（符合需求的输入）和无效等价类（不符合需求的输入）。这样可以减少测试用例数量，同时保证测试覆盖率。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q154", type: "short", lecture: 6, topic: "软件测试",
    question: "请解释基本路径测试方法的步骤。",
    answer: "基本路径测试方法的步骤：1.绘制程序流图：将程序流程图转化为流图，节点表示程序中的语句或判定，边表示控制流；2.计算环路复杂度：V(G) = 边数 - 节点数 + 2；3.确定基本路径集合：根据环路复杂度确定基本路径数量，找出所有独立的路径；4.设计测试用例：为每条基本路径设计测试用例，确保覆盖所有路径。",
    difficulty: 3, source: "复习材料"
  },
  {
    id: "q155", type: "short", lecture: 4, topic: "需求分析",
    question: "请解释用例图的作用和组成元素。",
    answer: "用例图用于描述系统的功能和用户（参与者）之间的交互。组成元素包括：1.参与者（Actor）：与系统交互的外部实体，可以是人或其他系统；2.用例（Use Case）：系统提供的一个功能单元；3.关系：包括关联关系（参与者和用例之间）、包含关系（<<include>>）、扩展关系（<<extend>>）和泛化关系。用例图帮助理解系统功能和用户需求。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q156", type: "short", lecture: 4, topic: "需求分析",
    question: "请解释顺序图的作用和组成元素。",
    answer: "顺序图用于描述对象之间的交互顺序，强调消息传递的时间顺序。组成元素包括：1.对象：参与交互的实体，用垂直生命线表示；2.消息：对象之间的通信，用水平箭头表示；3.生命线：表示对象在时间上的存在；4.激活期：表示对象执行操作的时间段；5.片段：如 alt（条件）、loop（循环）等。顺序图帮助理解用例中对象之间的交互流程。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q157", type: "short", lecture: 5, topic: "软件设计",
    question: "请解释分析类图的作用和组成元素。",
    answer: "分析类图用于描述系统的静态结构，包括类的属性、方法和关系。组成元素包括：1.类：用矩形表示，分为类名、属性和方法三部分；2.关系：包括关联、依赖、泛化、实现等；3.边界类、控制类、实体类：分别对应系统的交互层、逻辑层和数据层。分析类图帮助理解系统的静态结构和类之间的关系，为详细设计提供基础。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q158", type: "short", lecture: 5, topic: "用户界面",
    question: "请写出用户界面设计的原则。",
    answer: "用户界面设计的原则：1.一致性：保持界面风格、布局、交互方式的一致性；2.简洁性：界面简洁明了，避免不必要的复杂性；3.反馈性：及时给用户反馈，让用户了解操作结果；4.容错性：防止用户犯错，提供撤销功能；5.易用性：界面直观，易于学习和使用；6.美观性：界面美观，提升用户体验。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q159", type: "short", lecture: 6, topic: "软件实现",
    question: "软件实现的任务包括哪些活动？",
    answer: "软件实现的任务包括：1.编码：将软件设计转化为可执行的程序代码；2.单元测试：验证每个模块的正确性；3.代码审查：检查代码质量，发现潜在问题；4.集成：将模块组装成完整的系统；5.文档编写：编写代码注释和技术文档。软件实现是将设计转化为可运行软件的关键阶段。",
    difficulty: 2, source: "复习材料"
  },
  {
    id: "q160", type: "short", lecture: 6, topic: "软件部署",
    question: "软件部署的任务是什么？",
    answer: "软件部署的任务是将开发完成的软件系统安装到运行环境并使其可用。包括：1.安装软件：将软件安装到目标服务器或用户设备；2.配置环境：配置数据库、网络等运行环境；3.数据迁移：将旧系统数据迁移到新系统；4.培训用户：培训用户如何使用新系统；5.上线运行：正式启动新系统。",
    difficulty: 2, source: "复习材料"
  }
];
