const { createApp } = Vue;

createApp({
    data() {
        return {
            siteTitle: 'ポートフォリオ',
            currentYear: new Date().getFullYear(),
            navigationLinks: [
                { id: 'profile', text: 'プロフィール' },
                { id: 'skills', text: 'スキル' },
                { id: 'insights', text: '知見' },
                { id: 'contact', text: '連絡先' }
            ],
            isMenuOpen: false,
            activeSection: 'profile',
            profileTitle: 'プロフィール',
            profileName: 'okbboychships250499',
            profileOccupation: '無職、ネット絵描き',
            profileHobby: 'イラスト・漫画製作',
            profileImage: 'img/icon.png',
            profileDescription: 'フロントエンド開発を専門とするウェブ開発者です。ユーザー体験を重視した美しいウェブサイトの制作に情熱を持っています。',
            profileDetails: [
                { label: '年齢', value: '28歳' },
                { label: '所在地', value: '東京都' },
                { label: 'メール', value: 'example@example.com' },
                { label: 'GitHub', value: 'github.com/username' }
            ],
            skillsTitle: 'スキル',
            skills: [
                {
                    title: '使用ツール',
                    items: ['cursor', 'clipstudio']
                },
                {
                    title: '言語',
                    items: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
                },
                {
                    title: 'その他',
                    items: ['UI/UXデザイン', 'レスポンシブデザイン', 'アクセシビリティ']
                }
            ],
            contactTitle: '連絡先',
            contactInfo: {
                tel: '090-xxxx-xxxx',
                email: 'example@example.com'
            },
            insights: [
                {
                    date: '2024-03-01',
                    title: 'Vue.jsの導入',
                    summary: 'Vue.jsを導入し、SPAの実装方法について学びました。',
                    content: '<p>Vue.jsの導入により、以下のメリットを得ることができました：</p><ul><li>コンポーネントベースの開発</li><li>リアクティブなデータバインディング</li><li>シンプルな状態管理</li></ul>'
                },
                {
                    date: '2024-03-02',
                    title: 'レスポンシブデザイン',
                    summary: 'モバイルファーストのデザイン手法について学びました。',
                    content: '<p>レスポンシブデザインの実装で重要なポイント：</p><ul><li>メディアクエリの活用</li><li>フレックスボックスとグリッドレイアウト</li><li>ビューポートの考慮</li></ul>'
                }
            ],
            showModal: false,
            currentInsight: null
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        switchSection(sectionId) {
            this.activeSection = sectionId;
            this.isMenuOpen = false;
        },
        isActive(sectionId) {
            return this.activeSection === sectionId;
        },
        showInsightDetail(index) {
            this.currentInsight = this.insights[index];
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.currentInsight = null;
        }
    }
}).mount('#app'); 