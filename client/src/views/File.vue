<template>
<div v-if="file">
    <nav class="level is-mobile">
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">{{ $t('file.type') }}</p>
                <p class="title is-4">{{ file.extension.toUpperCase() }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">{{ $t('file.size') }}</p>
                <p class="title is-4">{{ file.size | humanBytes }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">{{ $t('file.downloaded') }}</p>
                <p class="title is-4">{{ file.downloadCount }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">{{ $t('file.visited') }}</p>
                <p class="title is-4">{{ file.visitCount }}</p>
            </div>
        </div>
    </nav>

    <hr>

    <h1 class="title is-5 tracking-wide mt-12 text-center">{{ file.name }}</h1>

    <div class="ads mt-10 text-center">
        <Adsense data-ad-client="ca-pub-4679085340013866" data-ad-slot="9178412838"></Adsense>
        <Adsense data-ad-client="ca-pub-4679085340013866" data-ad-slot="6511749031"></Adsense>
    </div>

    <div class="text-center" v-show="showDownloadButtons">
        <a
        :href="`${file.url_s3}`"
        class="button is-primary is-rounded mr-4 uppercase font-bold"
        :class="{ 'pointer-events-none': downloaded }"
        target="_blank"
        @click="onFileDownload"
        :disabled="downloaded"
      >{{ $t("file.downloadFile", { num: '1' }) }}</a>
        <!-- <a
        :href="`${file.url_s3}`"
        class="button is-rounded is-white uppercase font-bold"
        :class="{ 'pointer-events-none': downloaded }"
        target="_blank"
        @click="onFileDownload"
        :disabled="downloaded"
      >{{ $t("file.downloadFile", { num: '2' }) }}</a> -->
    </div>

    <div class="ads text-center">
        <Adsense data-ad-client="ca-pub-4679085340013866" data-ad-slot="6511749031"></Adsense>
    </div>
  <!-- <div class="mt-20" v-if="$i18n.locale === 'en'"> -->
    <div class="mt-20 mb-20">
        <h4 class="title title--no-sp is-6"></h4>

        <p>
          Cloud computing has become a prevalent force, bringing economies of scale and breakthrough technological advances to modern organizations, but it is more than just a trend. Cloud computing has evolved at an incredible speed and, in many organizations, is now entwined with the complex technological landscape that supports critical daily operations.
This ever-expanding cloud environment gives rise to new types of risk. Business and security leaders already face many challenges in protecting their existing IT environment. They must now also find ways to securely use multiple cloud services, supported applications and underlying technical infrastructure.

The surge in business processes supported by cloud services has been well evidenced by organizations using cloud services store confidential data in the cloud environment. But when using cloud services, organizations are still unsure whether to entrust cloud service providers (CSPs) with their data. CSPs generally provide a certain level of security as substantiated by multiple surveys, but cloud-related security incidents do occur.
CSPs cannot be solely responsible for the security of their customers’ critical information assets. Cloud security relies equally on the customer’s ability to implement the right level of information security controls. Nevertheless, the cloud environment is complex and diverse, which hinders a consistent approach to deploying and maintaining core security controls. It is vital that organizations are aware of and fulfill their share of the responsibility for securing cloud services to successfully address the cyber threats that increasingly target the cloud environment.


As organizations acquire new cloud services, they typically choose these from a selection of multiple CSPs and therefore need to deal with a multi-cloud environment, which is characterized using two or more CSPs.
Organizations favor a multi-cloud environment because it allows them to pick and choose their preferred cloud services across different CSPs (e.g. AWS, Microsoft Azure, Google Cloud, Salesforce). However, each individual CSP adopts its own jargon, its own specific technologies and approaches to security management. The cloud customer therefore needs to acquire a wide range of skills and knowledge to use different cloud services from multiple CSPs securely.
Organizations require a range of different users to securely access cloud services from within the organization’s network perimeter through secure network connections (e.g. via a gateway). However, organizations also need their cloud services to be accessed from outside the internal perimeter by business partners and users travelling off-site or working remotely, all connecting through a selection of secure network connections as dictated by the organization.
        </p>
    </div>
    <!-- <div class="mt-20" v-else>
        <h4 class="title title--no-sp is-6">透视腾讯、阿里财报背后的云端新战局</h4>

        <p>
          腾讯、阿里两大巨头先后发布季度财报，让两家的云计算产业再次成为了外界讨论的热点。

          腾讯率先放榜。腾讯2019财年Q2财报显示“金融科技及企业服务收入”收入为228.88亿元，撇除备付金余额的利息收入影响同比增长57%。腾讯一如既往地没有在季度财报中单独披露云计算收入，但提及“云服务收入稳健增长”。参考腾讯云近几个季度的同比增长速度都在三位数，财报中的“稳健”也说明腾讯云依然保持着很高的加速度。

          阿里巴巴2020财年Q1财报隔日而至。财报显示，当季阿里云收入为77.87亿元，同比增长约66%。可以对比的是，2019财年Q4，阿里云收入为77.26亿元，同比增长76%。阿里云的营收能力在国内依旧是一枝独秀，但对比看，领头羊的增速压力在进一步显现。

          对于云计算业务的增长动力，双方财报表述差异明显。阿里云表示，增长“由每位客户平均支出增加所推动”。腾讯则表示：“在企业服务方面，伴随销售团队及产品类型扩大，腾讯云获得了更多主要客户及大型合同，收入同比稳健增长。”——阿里侧重于展现对存量的挖掘，而腾讯的信心在于增量的快速提升。

          两强并进之余，云计算市场竞争格局也正发生着微妙的变化。

          此前Gartner发布的报告显示，腾讯云2018年在IaaS市场增速达到128%，整体市场份额位列全球第六名、亚太区第四名，增速全球第一。财报发布前，高盛也曾预估腾讯云可贡献38亿元营收，这一数字已经接近阿里云的一半，双方的收入差距进一步缩小。

          最近半年来腾讯云与合作方对外公开宣布的、与营收直接相关的“市场打单”动作，也印证着外界的外界的评价。

          今年6月上旬，腾讯云、腾讯产业投资基金、东华软件和华体科技的四方联合体中标成都市“智慧绿道”项目，成都将会建设锦城绿道和沿线的商业等设施，铺开城市“绿色网络”，腾讯云方面提供智慧化解决方案，该单价格高达8.7亿元。

          紧接着在7月初，腾讯云中标长沙市城市超级大脑项目，根据长沙政府采购网公示内容，中标价格高达5.2亿元，主要用于打造长沙新型智慧城市建设的“神经中枢”，加快推动长沙的数字化发展进程。

          这些动作与财报中“……获得更多主要客户及大型合同，云业务的收入同比稳健增长”相契合。

          而上述营收可观的项目都指向一个领域：政务。事实上，它们某种程度上都可以看做腾讯云在政务领域标杆案例的规模化复制。

          例如，长沙市城市超级大脑项目即是腾讯城市发展解决方案“WeCity未来城市”的首个落地项目，而WeCity是腾讯云标杆项目规模化复制在政务领域的主要载体。

          WeCity被腾讯财报在谈到腾讯云不多的表述中重点提到，官方定义是“以腾讯云的基础产品和能力为底层，为数字政务、城市治理、城市决策和产业互联等领域提供解决方案，并通过微信、小程序等工具触达用户”，简单说就是一个全新的政务业务品牌，其目的是将腾讯在政务大本营广东的典型项目“数字广东”经验拓展到更多地区。

          在这之前，腾讯云的政务相关解决方案已经在全国22个省份落地，在政务领域实现了三年25倍的增长。腾讯云通过WeCity开始“批量复制”政务案例并不意外。

          由此可见，过去一段时间腾讯签署的那些“战略合作协议”，未来都有可能承载WeCity的规模化复制，带来可观的营收增长。

          除了政务，腾讯云在金融方面也在走类似的规模化复制道路。截至目前，腾讯云已有6000+金融客户，150多家银行客户，公开信息中四大国有银行中有3家和腾讯云有合作。

          放眼国际市场，同季度亚马逊AWS营收增长37%、微软Azure增长64%、阿里云增长66%，增速都出现相对下滑。

          虽然这可以认为是因为体量越大、增长越难，但随之而来的是打法的变化。阿里财报中写到，阿里云“本季业务增长主要来自于平均每个用户消费额的提升”，这既可以看作是现有存量用户的深挖，也表明在快速复制的行业大背景下，阿里云实现客户数量到客户质量的换挡，这个过程降了一些增速未必是坏事。

          事实上，自去年以来，阿里云在其基础设施优势基础上，先后提出了“达尔文计划”——通过一系列包括平台、芯片和微基站在内的全链路生态服务，交付给企业一张自有可控的物联网，以及“新制造”概念——加入更多物联网和人工智能技术，落地柔性供应链，实现按需定制，这很明显都是要把整体解决方案推广到更多客户群的动作。
        </p>
    </div> -->
</div>
</template>

<script>
import axios from 'axios';
import prettyBytes from 'pretty-bytes';
import EventBus from '@/eventBus';

export default {
  data: () => ({
    file: null,
    title: '',
    downloaded: false,
    showDownloadButtons: false,
  }),
  filters: {
    humanBytes(val) {
      return prettyBytes(Number(val));
    },
  },
  mounted() {
    axios
      .get(`/api/files/${this.$route.params.id}`)
      .then(({
        data: file,
      }) => {
        this.file = file;
        this.file.visitCount += 1;
        this.title = `${file.name} - `;

        setTimeout(() => {
          this.showDownloadButtons = true;
        }, 2000);
      })
      .catch((err) => {
        console.log(err);

        if (err.response.status === 500) {
          return EventBus.$emit(
            'error',
            'Server Error: Unable to handle the request now. Please try again later.',
          );
        }

        return this.$router.push('/404');
      });

    // setTimeout(() => {
    //   const ad = document.querySelector('ins.adsbygoogle');
    //   if (ad && ad.innerHTML.replace(/\s/g, '').length === 0) {
    //     this.$router.push({ name: 'ad-blocker' });
    //   }
    // }, 1500);
  },
  methods: {
    onFileDownload() {
      this.file.downloadCount += 1;
      this.downloaded = true;

      axios.post(`/api//download/${this.file.encodedName}`);
    },
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
};
</script>
