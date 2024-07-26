import React from 'react';
import Link from 'next/link';

export default function Brand() {
    return (
        <Link href={'/'} legacyBehavior>
            <div>
                <span className="brand" />
                <span className="brand-name">Den<em>T</em>al Care</span>
            </div>
        </Link>
    );
}
