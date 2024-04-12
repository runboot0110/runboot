import React from "react";
import styles from "../styles/rootNavLink.module.css";
import Link from "next/link";

function RootNavLinks() {
    return (  
        <div className={styles.rootNavLinkWrap}>
            <ul>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="/" className={styles.listLink}>
                        <h2>Question →</h2>
                        <p>興味深い分野について、全世界のユーザーと議論し、意見を交わす場を提供。新たな発見を共に探求しましょう。</p>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="/" className={styles.listLink}>
                        <h2>Project →</h2>
                        <p>自分の情熱を注ぐ分野について、グローバルな視点を獲得し、深い知識を培うプロジェクトを推進します。</p>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="/" className={styles.listLink}>
                        <h2>Group →</h2>
                        <p>共通の関心事を持つ人々が集まり、経験や知識を共有するディスカッショングループ。刺激的な議論が待っています。</p>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="/" className={styles.listLink}>
                        <h2>Event →</h2>
                        <p>様々なイベントに参加して、自分の知識を広げ、新しい視点を得ることができます。世界が広がるチャンスです。</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default RootNavLinks;