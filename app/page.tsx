const pwaUrl = "https://akiii2024.github.io/RC_Setting_Manager/";
const githubUrl = "https://github.com/akiii2024/RC_Setting_Manager";
const releasesUrl = "https://github.com/akiii2024/RC_Setting_Manager/releases";

export const dynamic = "force-static";

const features = [
  {
    number: "01",
    title: "車種別セッティング",
    copy: "マシンごとに足まわりや駆動系などの設定値を整理。変更前後を残し、次の一手を迷わない記録に。",
    detail: "セッティング管理",
  },
  {
    number: "02",
    title: "走行ログ・統計",
    copy: "ベストラップ、路面状況、フィーリング、変更点をひとまとめ。履歴と統計から改善の手がかりを探せます。",
    detail: "タイムと感触を可視化",
  },
  {
    number: "03",
    title: "AIセッティング相談",
    copy: "症状や走らせ方を伝えると、根拠・変更候補・確認手順まで構造化して提案。判断材料として活用できます。",
    detail: "通信・同意が必要",
    accent: true,
  },
  {
    number: "04",
    title: "OCRで取り込み",
    copy: "手元のセッティングシートを画像から読み取り、入力をサポート。紙に残した資産もデジタルへつなげます。",
    detail: "通信・同意が必要",
  },
  {
    number: "05",
    title: "コース・天気",
    copy: "走行場所とコンディションを記録。位置情報を許可した場合は、天気情報もセットアップの文脈に加えられます。",
    detail: "天気取得は通信・同意が必要",
  },
  {
    number: "06",
    title: "バックアップ＆表示",
    copy: "データの書き出し・読み込みに対応。ピットの明るさや好みに合わせてダークモードも選べます。",
    detail: "端末間の移行にも",
  },
];

const screens = [
  {
    src: "./screens/home-dashboard.png",
    title: "ホーム",
    copy: "マシンと直近のセッティングへ、ピットからすばやくアクセス。",
    alt: "RC Setting Managerのホーム画面。登録マシンと最近のセッティングを表示",
  },
  {
    src: "./screens/setting-editor.png",
    title: "セッティング編集",
    copy: "項目を車種別に整理し、よく使う値から効率よく編集。",
    alt: "TRF421Xのセッティング編集画面。表示モードとカテゴリタブを表示",
  },
  {
    src: "./screens/history-statistics.png",
    title: "履歴・統計",
    copy: "ベストラップと走行履歴を並べて、変化を数字で確認。",
    alt: "RC Setting Managerの統計画面。走行ログとベストラップを表示",
  },
  {
    src: "./screens/ai-advisor.png",
    title: "AIアドバイザー",
    copy: "症状の診断から変更候補、テストプランまで見通せます。",
    alt: "AIセッティングアドバイザーのデモ結果。診断、変更候補、テストプランを表示",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RC Setting Manager トップへ">
          <img src="./app-icon.png" alt="" width="40" height="40" />
          <span>
            <strong>RC SETTING</strong>
            <small>MANAGER</small>
          </span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#flow">使い方</a>
          <a href="#features">機能</a>
          <a href="#screens">画面</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href={pwaUrl} target="_blank" rel="noopener noreferrer">
          Web版を試す <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow"><span /> BUILT FOR THE PIT LANE</div>
            <h1 id="hero-title">セッティングを、<br /><em>速さにつなげる。</em></h1>
            <p className="hero-lead">
              車両ごとの設定、走行メモ、履歴、AIアドバイスをひとつに。RC Setting Managerは、ブラウザからすぐ使えるRCカー向けセッティング管理アプリです。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={pwaUrl} target="_blank" rel="noopener noreferrer">
                Web版を試す <Arrow />
              </a>
              <a className="button button-ghost" href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHubを見る <Arrow />
              </a>
            </div>
            <div className="hero-facts" aria-label="アプリの特徴">
              <span><b>OFFLINE</b> コア記録</span>
              <span><b>PWA</b> インストール対応</span>
              <span><b>OPEN</b> GitHub公開</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="RC Setting Managerの画面イメージ">
            <div className="telemetry telemetry-top">
              <span>SESSION / 04</span><b>12.428</b><small>BEST LAP</small>
            </div>
            <div className="phone phone-main">
              <div className="phone-bar"><i /><span>RSM / HOME</span><i /></div>
              <img src="./screens/home-dashboard.png" alt="RC Setting Managerのホーム画面" width="430" height="932" />
            </div>
            <div className="phone phone-back">
              <div className="phone-bar"><i /><span>RUN / STATS</span><i /></div>
              <img src="./screens/history-statistics.png" alt="RC Setting Managerの履歴・統計画面" width="430" height="932" />
            </div>
            <div className="telemetry telemetry-bottom">
              <span>TRACK TEMP</span><b>31.2<small>°C</small></b><i>+1.8</i>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="RC Setting Managerで管理できる情報">
          <div>CAMBER <b>−1.5°</b></div><span />
          <div>RIDE HEIGHT <b>5.0 mm</b></div><span />
          <div>BEST LAP <b>12.428</b></div><span />
          <div>CONDITION <b>HIGH GRIP</b></div>
        </section>

        <section className="section flow-section" id="flow" aria-labelledby="flow-title">
          <div className="section-intro">
            <div className="kicker">WORKFLOW <span>01</span></div>
            <h2 id="flow-title">速くなるヒントを、<br />走るたびに積み上げる。</h2>
            <p>記憶だけに頼らず、セットと走りを同じ流れに。次の走行で試すことが、自然に見えてきます。</p>
          </div>
          <ol className="flow-list">
            <li>
              <div className="flow-no">01</div>
              <div className="flow-icon" aria-hidden="true">＋</div>
              <h3>記録する</h3>
              <p>車両の設定、タイム、路面、フィーリングを走行直後に保存。</p>
            </li>
            <li>
              <div className="flow-no">02</div>
              <div className="flow-icon" aria-hidden="true">≠</div>
              <h3>比較する</h3>
              <p>過去のベストや変更前後を見比べ、効いた変化を見つける。</p>
            </li>
            <li>
              <div className="flow-no">03</div>
              <div className="flow-icon flow-icon-accent" aria-hidden="true">↗</div>
              <h3>改善する</h3>
              <p>履歴やAIの提案を判断材料に、次のテストプランを組み立てる。</p>
            </li>
          </ol>
        </section>

        <section className="section features-section" id="features" aria-labelledby="features-title">
          <div className="section-heading-row">
            <div>
              <div className="kicker">FUNCTIONS <span>02</span></div>
              <h2 id="features-title">ピットワークを支える、<br />7つの現行機能。</h2>
            </div>
            <p>アプリの現在の実装で利用できる機能だけを掲載しています。</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className={`feature-card${feature.accent ? " feature-card-accent" : ""}`} key={feature.number}>
                <div className="feature-top"><span>{feature.number}</span><i /></div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
                <small>{feature.detail}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="screens-section" id="screens" aria-labelledby="screens-title">
          <div className="section screens-heading">
            <div className="kicker kicker-light">INTERFACE <span>03</span></div>
            <h2 id="screens-title">マシンの状態を、<br />ひと目でつかむ。</h2>
            <p>実装中の最新画面を、デモデータで再現しています。</p>
          </div>
          <div className="screen-rail">
            {screens.map((screen, index) => (
              <figure className="screen-card" key={screen.src}>
                <div className="screen-label"><span>0{index + 1}</span> / {screen.title}</div>
                <div className="screen-device">
                  <div className="device-speaker" />
                  <img src={screen.src} alt={screen.alt} width="430" height="932" loading={index > 1 ? "lazy" : "eager"} />
                </div>
                <figcaption><strong>{screen.title}</strong><p>{screen.copy}</p></figcaption>
              </figure>
            ))}
          </div>
          <p className="demo-note">※ 画面内のマシン名・タイム・アドバイスは、紹介用のデモデータです。</p>
        </section>

        <section className="section install-section" aria-labelledby="install-title">
          <div className="install-panel">
            <div className="install-copy">
              <div className="kicker kicker-light">START NOW <span>04</span></div>
              <h2 id="install-title">ブラウザで開いて、<br />そのままピットへ。</h2>
              <p>PWA版はインストール不要ですぐ利用できます。ホーム画面へ追加すれば、アプリのように起動できます。</p>
              <div className="install-actions">
                <a className="button button-primary" href={pwaUrl} target="_blank" rel="noopener noreferrer">Web版を開く <Arrow /></a>
                <a className="text-link" href={releasesUrl} target="_blank" rel="noopener noreferrer">Android APKを入手 <Arrow /></a>
              </div>
            </div>
            <div className="install-status" aria-label="利用条件">
              <div className="status-card"><span className="status-light green" /><div><small>CORE RECORDS</small><b>オフラインで利用可能</b></div></div>
              <div className="status-card"><span className="status-light orange" /><div><small>AI / OCR / WEATHER</small><b>同意と通信が必要</b></div></div>
              <div className="status-grid" aria-hidden="true"><span>SETUP</span><span>RUN LOG</span><span>STATS</span><span>BACKUP</span></div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="faq-heading">
            <div className="kicker">FAQ <span>05</span></div>
            <h2 id="faq-title">よくある質問。</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>料金はかかりますか？<span>＋</span></summary>
              <p>Web版はブラウザから利用できます。ソースコードもGitHubで公開されています。</p>
            </details>
            <details>
              <summary>オフラインでも使えますか？<span>＋</span></summary>
              <p>車両・セッティング・走行ログなどのコア記録はオフラインで利用できます。AI相談、OCR、天気情報の取得には通信と利用への同意が必要です。</p>
            </details>
            <details>
              <summary>データを別の端末へ移せますか？<span>＋</span></summary>
              <p>バックアップの書き出しと読み込みを使って移行できます。現在、クラウド同期は現行機能として提供していません。</p>
            </details>
            <details>
              <summary>Androidアプリはありますか？<span>＋</span></summary>
              <p>GitHubのリリースページからAPKを入手できます。インストール不要で試す場合はPWA版をご利用ください。</p>
            </details>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="final-line" aria-hidden="true">READY / SET / RUN</div>
          <img src="./app-icon.png" alt="" width="80" height="80" />
          <h2 id="final-title">次の1周を、<br />もっと確かなものに。</h2>
          <a className="button button-primary" href={pwaUrl} target="_blank" rel="noopener noreferrer">Web版を試す <Arrow /></a>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img src="./app-icon.png" alt="" width="48" height="48" />
          <div><strong>RC SETTING MANAGER</strong><small>RECORD. COMPARE. IMPROVE.</small></div>
        </div>
        <div className="footer-links">
          <a href={pwaUrl} target="_blank" rel="noopener noreferrer">PWA版 <Arrow /></a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a>
          <a href={releasesUrl} target="_blank" rel="noopener noreferrer">APKリリース <Arrow /></a>
        </div>
        <p>© {new Date().getFullYear()} RC Setting Manager</p>
      </footer>
    </>
  );
}
