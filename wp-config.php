<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u560098488_useoline' );

/** Database username */
define( 'DB_USER', 'u560098488_useonline' );

/** Database password */
define( 'DB_PASSWORD', '5%Q#Eq?6h1D%0ieX' );

/** Database hostname */
define( 'DB_HOST', 'mysql' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'H`rb ,7_$J&re%r63d9pmAy,tMgP$e/103%8VKIh=_qWb7[S+?y::e%_=8>,9KEW' );
define( 'SECURE_AUTH_KEY',   'GsHWJ,g0 1vls#~Y% _4!IjUDx4_>jz6Wkf:Knt3E(yA9:L10J,<4T)>D3}?a6Rq' );
define( 'LOGGED_IN_KEY',     '2LuJ*PVxu5t?~;cw4311e]Zbg<eDcg:sQ/Qyzk.|zCop;R{W*/Rkrcu_sX-26i3:' );
define( 'NONCE_KEY',         ']iccdraz_fZRX6Sthhr=8p {H}7&aPQP#g+*+ja2aTBflB}4h.o0pS>:ldnOlff~' );
define( 'AUTH_SALT',         'Ib8z]-F+poA^( Bc@CHgng#=dR>d,7a;e1~.|=RHe2A9LhDoo@Vf}|}Wh3SnfEf#' );
define( 'SECURE_AUTH_SALT',  'I|=`dV+(*dpve?SbA,xzOikCm64~W3uc7ZZEr`~gqDY?}% w)Lx[R$J7M<,L[%u|' );
define( 'LOGGED_IN_SALT',    ']Byl+xeQ c*s9;/;fD3]IdY[[vPG*IL:q#db,Gm}+UM;`IbJkD9pblkKTXmufl/!' );
define( 'NONCE_SALT',        ',mB,oz5]ByUzBbce2NVsm8?!`.K8|H,!,~*:uvHz6-+g{AES8=Gui@sag++SY??P' );
define( 'WP_CACHE_KEY_SALT', 'rQ>~Kp3QX4f.nSWHFd~B#XpFj1&x?eWwOgN$_>=mSt>WK$p~Tn%:eb0j/MikPSRN' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
