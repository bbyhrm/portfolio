const { createApp } = Vue;

createApp({
    data() {
        return {
            siteTitle: 'ポートフォリオ',
            currentYear: new Date().getFullYear(),
            navigationLinks: [
                { text: 'プロフィール', id: 'profile' },
                { text: 'スキル', id: 'skills' },
                { text: '日記', id: 'diary' },
                { text: '連絡先', id: 'contact' }
            ],
            activeSection: 'profile',
            profileTitle: 'プロフィール',
            profileName: '山田 太郎',
            profileOccupation: 'Webデザイナー',
            profileHobby: '写真撮影、旅行',
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
                    title: 'デザイン',
                    items: ['Photoshop', 'Illustrator', 'Figma']
                },
                {
                    title: '開発',
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
            diaryPages: [
                {
                    date: '2025/4/13',
                    content: '今日は新しいプロジェクトの打ち合わせがありました。クライアントとのミーティングで、ウェブサイトのデザインについて詳細な要望を伺うことができました。'
                },
                {
                    date: '2025/4/14',
                    content: 'プロジェクトの初期デザインを作成しました。モダンで使いやすいインターフェースを目指して、いくつかのデザイン案を考えています。'
                },
                {
                    date: '2025/4/15',
                    content: 'デザインのフィードバックを受け、修正を行いました。クライアントからの要望を反映させ、より良いデザインに仕上げていきます。'
                },
                {
                    date: '2025/4/16',
                    content: 'コーディング作業を開始しました。レスポンシブデザインを意識しながら、モバイルファーストのアプローチで進めています。'
                },
                {
                    date: '2025/4/17',
                    content: 'プロジェクトの最終チェックを行いました。細かいバグの修正や、パフォーマンスの最適化を行い、完成に近づいています。'
                }
            ],
            currentDiaryPage: 0
        };
    },
    computed: {
        currentDiary() {
            return this.diaryPages[this.currentDiaryPage];
        }
    },
    methods: {
        switchSection(sectionId) {
            this.activeSection = sectionId;
            if (sectionId === 'diary') {
                this.currentDiaryPage = 0;
            }
        },
        isActive(sectionId) {
            return this.activeSection === sectionId;
        },
        goToPage(index) {
            this.currentDiaryPage = index;
        },
        goToNextPage() {
            if (this.currentDiaryPage < this.diaryPages.length - 1) {
                this.currentDiaryPage++;
            }
        },
        goToPrevPage() {
            if (this.currentDiaryPage > 0) {
                this.currentDiaryPage--;
            }
        }
    }
}).mount('#app'); 