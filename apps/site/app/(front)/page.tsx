import { auth } from 'auth';
import { cache } from 'react';
import { Avatar } from 'components/avatar';
import NewPostCard from 'components/new-post';
import { post } from 'app/actions';
import { Posts } from 'components/posts';
import getPosts from 'lib/actions/get-posts';
import classNames from 'classnames';

const loadPosts = cache(async () => {
  const posts = await getPosts({ pageParam: { native: 0, portfolio: 0 } });
  return posts;
});

export default async function HomePage() {
  const session = await auth();

  const initialPosts = await loadPosts();
  // console.log('initialPosts', initialPosts);
  return (
    <div>
      <div className="">
        <div
          className={classNames('space-y-6 pt-10 lg:py-8', {
            'mx-auto max-w-4xl': session?.user,
          })}
        >
          {session?.user ? (
            <div className="space-y-2 -mt-4">
              <div className="px-3 pb-3 pt-2 bg-elevated rounded-xl relative">
                {/* <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="absolute h-auto z-50 pt-[3px] pb-[3px] top-0 right-0 py-2 pl-2 pr-2 border-0 hover:bg-smoke text-muted bg-elevated text-sm items-center font-normal justify-start"
                >
                  <Link href={`/new`}>
                    <ArrowsPointingOutIcon className="w-3 h-3 -mt-[1px] mr-1" />{' '}
                    Zvětšit
                  </Link>
                </Button> */}
                <div className="flex flex items-start justify-start ">
                  <Avatar
                    imageUrl={session.user.image || ''}
                    name={session.user.fullName || session.user.username}
                    className="rounded-full border w-12 h-12 mr-2 text- mt-1"
                    size={48}
                  />
                  <NewPostCard post={post} defaultPost="" />
                </div>
              </div>
            </div>
          ) : (
            <Hero />
          )}
          <Posts posts={initialPosts} maxColumnCount={session?.user ? 1 : 4} />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="mx-auto mb-6 px-4 sm:mt-6 sm:mb-16 sm:px-6 md:mt-10 md:mb-24">
      <div className="text-center justify-center items-center flex flex-col">
        <svg
          className="mb-3 px-4 -mr-2 sm:px-0 w-auto sm:w-330 md:w-440"
          viewBox="0 0 664 163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M79.1452 55.6763C79.0312 65.774 70.4059 74.0521 59.8799 74.1662C49.3539 74.2803 40.9135 66.1871 41.0276 56.0894C41.1416 45.9917 49.7669 37.7136 60.2929 37.5995C70.8189 37.4855 79.2593 45.5787 79.1452 55.6763Z"
            fill="#5DC1E0"
          />
          <path
            d="M41.0273 56.0893C40.9132 66.187 32.2879 74.4651 21.762 74.5792C11.236 74.6933 2.79559 66.6001 2.90966 56.5024C3.02372 46.4047 11.649 38.1266 22.175 38.0125C32.701 37.8985 41.1414 45.9916 41.0273 56.0893Z"
            fill="#5DC1E0"
          />
          <path
            d="M41.4402 19.5224C41.3261 29.6201 32.7008 37.8982 22.1748 38.0123C11.6488 38.1264 3.20843 30.0332 3.3225 19.9355C3.43656 9.8378 12.0619 1.55969 22.5879 1.44563C33.1138 1.33156 41.5542 9.42474 41.4402 19.5224Z"
            fill="#5DC1E0"
          />
          <path
            d="M79.5581 19.1094C79.444 29.2071 70.8187 37.4852 60.2927 37.5993C49.7667 37.7133 41.3264 29.6201 41.4404 19.5225C41.5545 9.42476 50.1798 1.14665 60.7058 1.03259C71.2318 0.918523 79.6721 9.0117 79.5581 19.1094Z"
            fill="#5DC1E0"
          />
          <path
            d="M116.385 132.968C103.227 133.11 92.6769 122.994 92.8195 110.372C92.9621 97.7495 103.744 87.4018 116.901 87.2592C130.059 87.1167 140.609 97.2331 140.467 109.855C140.324 122.477 129.542 132.825 116.385 132.968ZM117.056 73.5467C96.0041 73.7749 78.7535 90.3311 78.5254 110.526C78.2972 130.721 95.178 146.908 116.23 146.68C137.282 146.452 154.533 129.895 154.761 109.7C154.989 89.505 138.108 73.3186 117.056 73.5467Z"
            fill="#985DA6"
          />
          <path
            d="M26.9282 102.777L26.6184 130.202L52.0303 129.927L51.8238 148.21L77.2357 147.935L78.0618 74.8016L52.6499 75.0769L27.238 75.3523L1.82612 75.6277L1.51633 103.053L26.9282 102.777Z"
            fill="#51B955"
          />
          <path
            d="M155.62 33.6035L155.174 73.1334L78.9381 73.9595L79.7642 0.826169L118.469 0.406744C125.603 0.329442 132.25 2.03955 137.896 5.07129C145.028 8.89918 150.557 14.8465 153.429 21.9653C154.518 24.6508 155.223 27.5031 155.492 30.4739C155.589 31.5021 155.632 32.5473 155.62 33.6035Z"
            fill="#EFC316"
          />
          <path
            d="M153.428 21.9652L79.5161 22.7661L79.7089 5.70172L137.896 5.07118C145.028 8.89908 150.557 14.8464 153.428 21.9652Z"
            fill="#F37A28"
          />
          <path
            d="M155.296 47.5785L79.314 48.7069L79.5884 31.2565L155.571 30.1281L155.296 47.5785Z"
            fill="#F37A28"
          />
          <path
            d="M155.007 73.1754L79.025 74.3037L79.2995 56.8533L155.282 55.725L155.007 73.1754Z"
            fill="#F37A28"
          />
          <path
            d="M10.6252 15.5229C11.1743 13.9557 12.0789 12.4907 13.3107 11.3215C13.9359 10.728 14.3824 10.3912 15.1501 9.97097C15.8713 9.57606 16.4009 9.37851 17.282 9.20434C17.8199 9.09795 18.1337 8.47876 18.0022 8.00262C17.8541 7.46648 17.3043 7.23132 16.7648 7.33773C12.8126 8.11981 9.91541 11.4996 8.67957 15.028C8.50433 15.528 8.86513 16.0855 9.37283 16.2144C9.92008 16.3533 10.4491 16.0249 10.6252 15.5229Z"
            fill="white"
          />
          <path
            d="M231.259 82.2C228.459 80.6667 225.592 79.4 222.659 78.4C219.792 77.4 217.092 76.9 214.559 76.9C211.426 76.9 208.959 77.5333 207.159 78.8C205.359 80.0667 204.459 81.9667 204.459 84.5C204.459 86.2333 205.126 87.8 206.459 89.2C207.859 90.5333 209.626 91.7333 211.759 92.8C213.959 93.8667 216.226 94.8333 218.559 95.7C220.692 96.5 222.792 97.4667 224.859 98.6C226.992 99.6667 228.892 101.033 230.559 102.7C232.226 104.3 233.559 106.333 234.559 108.8C235.559 111.2 236.059 114.167 236.059 117.7C236.059 121.433 235.092 124.9 233.159 128.1C231.226 131.3 228.392 133.9 224.659 135.9C220.926 137.833 216.326 138.8 210.859 138.8C208.059 138.8 205.192 138.533 202.259 138C199.392 137.4 196.559 136.533 193.759 135.4C190.959 134.2 188.259 132.7 185.659 130.9L192.059 119.6C193.792 120.867 195.659 122 197.659 123C199.726 123.933 201.792 124.667 203.859 125.2C205.926 125.733 207.826 126 209.559 126C211.292 126 213.026 125.767 214.759 125.3C216.559 124.767 218.026 123.9 219.159 122.7C220.359 121.5 220.959 119.833 220.959 117.7C220.959 116.233 220.459 114.9 219.459 113.7C218.526 112.5 217.226 111.4 215.559 110.4C213.959 109.4 212.192 108.533 210.259 107.8C207.992 106.933 205.659 105.933 203.259 104.8C200.859 103.667 198.592 102.3 196.459 100.7C194.392 99.0333 192.692 97 191.359 94.6C190.092 92.1333 189.459 89.1333 189.459 85.6C189.459 81.3333 190.392 77.6333 192.259 74.5C194.192 71.3667 196.892 68.9 200.359 67.1C203.826 65.2333 207.826 64.2 212.359 64C218.292 64 223.092 64.7 226.759 66.1C230.492 67.5 233.826 69.1667 236.759 71.1L231.259 82.2ZM283.288 134.256C281.432 135.728 279.096 136.912 276.28 137.808C273.528 138.704 270.808 139.152 268.12 139.152C263.32 139.152 259.128 138.288 255.544 136.56C252.024 134.768 249.272 132.24 247.288 128.976C245.368 125.648 244.408 121.648 244.408 116.976C244.408 112.304 245.464 108.336 247.576 105.072C249.688 101.744 252.44 99.216 255.832 97.488C259.288 95.76 262.904 94.896 266.68 94.896C270.456 94.896 273.72 95.408 276.472 96.432C279.288 97.456 281.688 98.8 283.672 100.464L277.144 109.104C276.248 108.4 275 107.696 273.4 106.992C271.864 106.224 270.04 105.84 267.928 105.84C266.072 105.84 264.376 106.32 262.84 107.28C261.304 108.24 260.088 109.552 259.192 111.216C258.296 112.88 257.848 114.8 257.848 116.976C257.848 119.024 258.328 120.912 259.288 122.64C260.248 124.368 261.56 125.744 263.224 126.768C264.952 127.728 266.968 128.208 269.272 128.208C270.744 128.208 272.088 128.016 273.304 127.632C274.584 127.184 275.672 126.576 276.568 125.808L283.288 134.256ZM305.705 96.048L306.953 107.568L306.665 105.84C307.881 103.344 309.545 101.232 311.657 99.504C313.769 97.712 315.849 96.336 317.897 95.376C320.009 94.416 321.609 93.936 322.697 93.936L322.025 107.376C318.889 106.992 316.201 107.504 313.961 108.912C311.721 110.32 309.993 112.176 308.777 114.48C307.561 116.784 306.953 119.152 306.953 121.584V138H293.609V96.048H305.705ZM349.242 139.152C345.338 139.152 341.786 138.384 338.586 136.848C335.45 135.248 332.954 132.816 331.098 129.552C329.242 126.288 328.314 122.128 328.314 117.072C328.314 112.336 329.274 108.24 331.194 104.784C333.114 101.328 335.642 98.672 338.778 96.816C341.914 94.896 345.242 93.936 348.762 93.936C352.922 93.936 356.058 94.64 358.17 96.048C360.346 97.392 362.138 98.896 363.546 100.56L362.97 102.192L364.218 96.048H376.698V138H363.258V128.88L364.314 131.76C364.186 131.76 363.802 132.144 363.162 132.912C362.522 133.616 361.562 134.48 360.282 135.504C359.066 136.464 357.53 137.296 355.674 138C353.882 138.768 351.738 139.152 349.242 139.152ZM353.082 128.208C354.682 128.208 356.122 127.984 357.402 127.536C358.682 127.024 359.802 126.32 360.762 125.424C361.722 124.464 362.554 123.28 363.258 121.872V111.6C362.746 110.192 361.978 109.008 360.954 108.048C359.93 107.024 358.714 106.256 357.306 105.744C355.898 105.168 354.33 104.88 352.602 104.88C350.682 104.88 348.89 105.392 347.226 106.416C345.626 107.376 344.346 108.72 343.386 110.448C342.426 112.176 341.946 114.16 341.946 116.4C341.946 118.64 342.458 120.656 343.482 122.448C344.506 124.24 345.85 125.648 347.514 126.672C349.242 127.696 351.098 128.208 353.082 128.208ZM416.851 139.152C414.355 139.152 411.891 138.704 409.459 137.808C407.091 136.848 405.107 135.504 403.507 133.776L403.891 129.84V158.16H390.547V95.088H402.067L403.987 103.248L402.931 100.368C405.107 98.512 407.539 96.976 410.227 95.76C412.915 94.544 416.019 93.936 419.539 93.936C423.443 93.936 426.931 94.864 430.003 96.72C433.075 98.512 435.475 101.136 437.203 104.592C438.995 107.984 439.891 112.08 439.891 116.88C439.891 121.616 438.899 125.648 436.915 128.976C434.931 132.304 432.211 134.832 428.755 136.56C425.299 138.288 421.331 139.152 416.851 139.152ZM414.163 128.592C416.339 128.592 418.323 128.112 420.115 127.152C421.971 126.192 423.443 124.848 424.531 123.12C425.683 121.328 426.259 119.312 426.259 117.072C426.259 114.704 425.747 112.656 424.723 110.928C423.763 109.136 422.419 107.76 420.691 106.8C419.027 105.776 417.171 105.264 415.123 105.264C413.331 105.264 411.731 105.52 410.323 106.032C408.979 106.48 407.763 107.184 406.675 108.144C405.651 109.04 404.755 110.192 403.987 111.6V121.872C404.499 123.216 405.235 124.4 406.195 125.424C407.155 126.448 408.307 127.248 409.651 127.824C411.059 128.336 412.563 128.592 414.163 128.592ZM478.005 139.152C474.485 139.152 471.509 138.576 469.077 137.424C466.709 136.208 464.629 134.64 462.837 132.72L463.893 129.84V138H450.453V62.256H463.797V103.248V98.928C465.461 97.52 467.669 96.336 470.421 95.376C473.173 94.416 476.309 93.936 479.829 93.936C483.477 93.936 486.805 94.8 489.813 96.528C492.821 98.256 495.221 100.784 497.013 104.112C498.869 107.376 499.797 111.376 499.797 116.112C499.797 120.848 498.773 124.944 496.725 128.4C494.741 131.856 492.085 134.512 488.757 136.368C485.429 138.224 481.845 139.152 478.005 139.152ZM475.029 127.824C477.013 127.824 478.837 127.312 480.501 126.288C482.229 125.264 483.605 123.856 484.629 122.064C485.653 120.272 486.165 118.256 486.165 116.016C486.165 113.776 485.653 111.792 484.629 110.064C483.605 108.336 482.229 106.992 480.501 106.032C478.837 105.008 477.013 104.496 475.029 104.496C473.301 104.496 471.669 104.784 470.133 105.36C468.661 105.872 467.381 106.64 466.293 107.664C465.269 108.624 464.469 109.808 463.893 111.216V121.488C464.661 122.896 465.557 124.08 466.581 125.04C467.669 125.936 468.917 126.64 470.325 127.152C471.733 127.6 473.301 127.824 475.029 127.824ZM507.095 116.496C507.095 112.208 508.087 108.368 510.071 104.976C512.119 101.584 514.967 98.928 518.615 97.008C522.263 95.024 526.455 94.032 531.191 94.032C535.991 94.032 540.151 95.024 543.671 97.008C547.191 98.928 549.879 101.584 551.735 104.976C553.655 108.368 554.615 112.208 554.615 116.496C554.615 120.784 553.655 124.656 551.735 128.112C549.879 131.504 547.191 134.192 543.671 136.176C540.151 138.16 535.927 139.152 530.999 139.152C526.391 139.152 522.263 138.256 518.615 136.464C515.031 134.672 512.215 132.08 510.167 128.688C508.119 125.296 507.095 121.232 507.095 116.496ZM520.631 116.592C520.631 118.768 521.079 120.752 521.975 122.544C522.871 124.272 524.087 125.648 525.623 126.672C527.159 127.696 528.887 128.208 530.807 128.208C532.919 128.208 534.743 127.696 536.279 126.672C537.815 125.648 538.999 124.272 539.831 122.544C540.663 120.752 541.079 118.768 541.079 116.592C541.079 114.352 540.663 112.368 539.831 110.64C538.999 108.912 537.815 107.536 536.279 106.512C534.743 105.488 532.919 104.976 530.807 104.976C528.887 104.976 527.159 105.488 525.623 106.512C524.087 107.536 522.871 108.912 521.975 110.64C521.079 112.368 520.631 114.352 520.631 116.592ZM561.939 116.496C561.939 112.208 562.931 108.368 564.915 104.976C566.963 101.584 569.811 98.928 573.459 97.008C577.107 95.024 581.299 94.032 586.035 94.032C590.835 94.032 594.995 95.024 598.515 97.008C602.035 98.928 604.723 101.584 606.579 104.976C608.499 108.368 609.459 112.208 609.459 116.496C609.459 120.784 608.499 124.656 606.579 128.112C604.723 131.504 602.035 134.192 598.515 136.176C594.995 138.16 590.771 139.152 585.843 139.152C581.235 139.152 577.107 138.256 573.459 136.464C569.875 134.672 567.059 132.08 565.011 128.688C562.963 125.296 561.939 121.232 561.939 116.496ZM575.475 116.592C575.475 118.768 575.923 120.752 576.819 122.544C577.715 124.272 578.931 125.648 580.467 126.672C582.003 127.696 583.731 128.208 585.651 128.208C587.763 128.208 589.587 127.696 591.123 126.672C592.659 125.648 593.843 124.272 594.675 122.544C595.507 120.752 595.923 118.768 595.923 116.592C595.923 114.352 595.507 112.368 594.675 110.64C593.843 108.912 592.659 107.536 591.123 106.512C589.587 105.488 587.763 104.976 585.651 104.976C583.731 104.976 582.003 105.488 580.467 106.512C578.931 107.536 577.715 108.912 576.819 110.64C575.923 112.368 575.475 114.352 575.475 116.592ZM620.047 138V62.256H633.487V138H620.047ZM644.143 109.488L663.151 138H647.503L635.311 117.168L644.143 109.488ZM629.455 126.384L628.111 113.616L653.455 94.992L661.615 102.192L629.455 126.384Z"
            fill="#2D2C2C"
          />
          <path
            d="M188.5 42V17H198.5V22H203.5V17H213.5V22H208.5V27H203.5V32H208.5V37H213.5V42H203.5V37H198.5V42H188.5ZM223.5 42V17H233.5V42H223.5ZM243.5 42V37H258.5V32H248.5V27H243.5V22H248.5V17H268.5V22H253.5V27H263.5V32H268.5V37H263.5V42H243.5ZM278.5 42V17H288.5V22H293.5V17H303.5V22H298.5V27H293.5V32H298.5V37H303.5V42H293.5V37H288.5V42H278.5ZM318.5 42V37H313.5V22H318.5V17H333.5V22H338.5V37H333.5V42H318.5ZM323.5 36.8H328.5V22.2H323.5V36.8ZM358.5 42V37H353.5V27H348.5V17H358.5V27H368.5V17H378.5V27H373.5V37H368.5V42H358.5ZM398.5 42V27H393.5V22H388.5V17H398.5V22H408.5V17H418.5V22H413.5V27H408.5V42H398.5ZM398.54 12V7H403.54V2H413.54V7H408.54V12H398.54Z"
            fill="#2D2C2C"
          />
          <path
            d="M530.534 115.316C530.534 116.683 531.704 119.839 531.704 117.071"
            stroke="#F37A28"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M585.533 116.486C585.533 119.05 587.461 115.98 586.119 115.901C584.416 115.801 584.431 118.242 586.119 118.242"
            stroke="#F37A28"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M539 149C548 159.5 569 159 578.5 149.5"
            stroke="#F37A28"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>

        <p className="mt-0 text-lg md:text-xl text-text mx-auto">
          Co se studenti KISKu na svých portfoliích právě učí a na čem pracují.
        </p>
      </div>
    </div>
  );
}
