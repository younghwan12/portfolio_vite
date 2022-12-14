import $ from 'jquery';

const canvas = () => {
    const star =
    '<svg class="sec01_svg" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1220.000000 1280.000000" preserveAspectRatio="xMidYMid meet"> <metadata> Created by potrace 1.15, written by Peter Selinger 2001-2017 </metadata> <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M4995 12366 c-165 -239 -300 -439 -300 -446 0 -6 194 -136 430 -289 l430 -277 3 -307 2 -308 -42 25 c-178 102 -830 466 -837 466 -14 0 -574 -912 -563 -919 6 -3 215 -127 465 -276 l454 -270 -5 -200 c-2 -110 -7 -256 -10 -324 l-7 -125 -175 -93 c-96 -52 -223 -119 -281 -150 l-105 -56 -290 153 c-159 84 -291 155 -293 156 -2 2 11 254 28 560 17 307 29 559 27 561 -4 5 -53 10 -700 83 -247 28 -450 50 -451 48 -1 -2 -7 -270 -13 -597 -6 -326 -13 -595 -15 -598 -5 -5 -525 274 -545 291 -9 9 -19 165 -38 586 -14 316 -27 580 -28 585 -3 9 -1071 -36 -1080 -46 -2 -2 3 -76 10 -164 56 -648 75 -872 80 -950 l7 -90 -494 -229 c-272 -126 -498 -232 -503 -237 -4 -4 97 -230 225 -503 l233 -495 211 108 c115 60 325 167 465 239 l255 130 258 -148 c142 -81 260 -150 263 -153 3 -2 -191 -121 -430 -262 l-435 -258 67 -126 c334 -628 438 -821 446 -821 4 0 218 117 473 261 256 143 471 258 477 255 6 -3 130 -78 276 -168 l265 -163 -3 -290 c-2 -160 -5 -304 -8 -320 -5 -27 -34 -48 -290 -207 l-284 -177 -58 38 c-319 212 -876 571 -883 569 -10 -4 -692 -928 -688 -932 2 -2 235 -141 518 -311 353 -211 509 -310 500 -316 -8 -4 -130 -79 -272 -167 l-258 -159 -521 270 c-286 148 -523 265 -528 261 -4 -5 -103 -194 -219 -421 l-212 -411 3 -77 3 -77 512 -240 c487 -229 513 -242 512 -267 0 -14 -21 -263 -47 -553 l-48 -528 31 -5 c63 -10 1055 -88 1060 -83 5 5 15 172 34 568 6 113 13 264 17 337 l6 131 260 152 c143 83 262 150 264 148 2 -2 7 -229 10 -505 l7 -500 131 -6 c298 -14 936 -30 943 -23 4 3 10 245 13 537 4 299 11 533 16 538 5 5 131 77 281 160 l272 151 218 -131 c120 -73 243 -149 274 -170 l56 -38 6 -128 c4 -70 10 -221 13 -334 l7 -206 -499 -252 c-274 -139 -500 -254 -501 -255 -3 -2 456 -1058 462 -1064 2 -2 239 127 527 287 l523 291 6 -92 c4 -51 9 -194 13 -318 l6 -225 -494 -315 c-314 -200 -494 -320 -491 -328 3 -7 123 -197 267 -422 l263 -409 77 -1 76 0 349 243 c191 133 391 273 444 310 l96 66 442 -309 c262 -184 451 -310 464 -310 18 1 84 90 322 434 165 239 300 439 300 446 0 6 -193 136 -430 289 l-430 277 -3 307 -2 308 42 -25 c178 -102 830 -466 837 -466 8 0 575 910 569 914 -1 2 -199 119 -438 261 -239 142 -446 266 -460 275 l-25 18 13 323 c8 178 14 324 15 325 1 1 124 69 274 151 l271 150 289 -153 c158 -85 292 -155 297 -157 4 -1 -6 -254 -23 -562 -17 -307 -29 -560 -27 -562 4 -5 53 -10 700 -83 247 -28 450 -50 451 -48 1 2 7 270 13 597 6 326 13 595 15 598 5 5 525 -274 545 -291 9 -9 19 -165 38 -586 14 -316 27 -580 28 -585 3 -9 1071 36 1080 46 2 2 -3 76 -10 164 -56 648 -75 872 -80 950 l-7 90 494 229 c272 126 498 232 503 237 4 4 -97 230 -225 503 l-233 495 -211 -108 c-115 -60 -325 -167 -465 -239 l-255 -130 -258 148 c-142 81 -260 150 -263 153 -3 2 191 121 430 262 l435 258 -67 126 c-334 628 -438 821 -446 821 -4 0 -217 -117 -473 -260 l-465 -261 -67 40 c-36 23 -160 100 -276 174 l-210 132 3 245 c1 135 5 277 8 315 l6 71 284 176 284 177 58 -38 c319 -212 876 -571 883 -569 10 4 692 928 688 932 -2 2 -235 141 -518 311 -353 211 -509 310 -500 316 8 4 130 79 272 167 l258 159 521 -270 c286 -148 523 -265 528 -261 4 5 103 194 219 421 l212 411 -3 77 -3 77 -512 240 c-487 229 -513 242 -512 267 0 14 21 263 47 553 l48 528 -31 5 c-63 10 -1055 88 -1060 83 -5 -5 -15 -172 -34 -568 -6 -113 -13 -264 -17 -337 l-6 -131 -260 -152 c-143 -83 -262 -150 -264 -148 -2 2 -7 229 -10 505 l-7 500 -131 6 c-299 14 -936 30 -943 23 -4 -4 -10 -245 -13 -536 -4 -291 -8 -531 -11 -533 -11 -10 -590 -287 -599 -287 -13 0 -97 52 -321 198 l-186 122 -6 118 c-4 64 -10 212 -13 328 l-7 211 499 253 c274 138 500 253 501 254 3 2 -456 1058 -462 1064 -2 2 -239 -127 -527 -287 l-523 -291 -6 92 c-4 51 -9 194 -13 318 l-6 225 494 315 c323 206 494 320 491 328 -3 8 -123 197 -267 422 l-263 409 -77 1 -76 0 -349 -243 c-191 -133 -391 -273 -444 -310 l-96 -66 -442 309 c-262 184 -451 310 -464 310 -18 -1 -84 -90 -322 -434z"/> </g> </svg>'
    const snow2 =
        '<svg class="sec01_svg" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1115.000000 1280.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M5505 12789 c-48 -13 -115 -78 -141 -133 -23 -50 -24 -58 -24 -339 l0 -288 -42 30 c-102 73 -238 38 -289 -74 -23 -50 -23 -99 -1 -148 10 -23 82 -103 175 -196 l157 -157 0 -349 0 -349 -277 275 c-232 229 -285 277 -319 287 -50 15 -59 15 -107 1 -43 -12 -101 -59 -123 -100 -18 -36 -18 -120 0 -162 8 -18 192 -210 420 -437 l406 -405 0 -350 0 -350 -522 522 c-288 287 -536 527 -551 532 -46 18 -124 13 -167 -9 -80 -41 -119 -147 -86 -233 13 -34 146 -172 671 -697 l655 -655 0 -342 c0 -189 -3 -343 -8 -343 -4 0 -347 340 -762 756 -415 415 -768 763 -785 771 -16 9 -46 19 -65 22 -35 6 -35 7 -43 71 -24 195 26 442 112 557 l39 51 -31 -9 c-126 -36 -353 32 -553 167 -101 68 -246 202 -309 285 -25 34 -45 59 -45 57 0 -1 13 -35 29 -74 67 -164 95 -336 88 -539 -7 -208 -41 -324 -124 -416 l-36 -40 29 8 c16 4 67 7 114 6 150 -3 305 -67 512 -214 5 -3 2 -22 -7 -42 -8 -20 -15 -49 -15 -65 0 -15 63 -262 139 -547 77 -286 201 -751 276 -1033 76 -282 136 -515 133 -517 -3 -3 -137 71 -299 164 l-294 169 -41 154 c-23 84 -130 484 -239 888 -123 462 -204 746 -217 766 -39 57 -83 79 -159 79 -60 0 -71 -3 -105 -31 -81 -65 -100 -127 -71 -232 119 -434 357 -1336 353 -1339 -5 -5 -560 311 -583 331 -7 7 -78 257 -159 556 -98 366 -153 557 -169 581 -67 104 -243 102 -312 -2 -48 -73 -45 -97 62 -493 53 -197 95 -360 93 -361 -2 -2 -133 73 -293 166 -159 92 -293 170 -297 171 -4 2 -34 101 -66 220 -63 235 -81 271 -148 303 -82 39 -180 15 -238 -58 -28 -35 -31 -45 -31 -112 0 -62 -2 -72 -15 -65 -8 4 -112 64 -230 132 -118 68 -230 130 -249 136 -19 7 -60 12 -91 12 -209 0 -306 -247 -156 -394 23 -23 121 -86 217 -141 95 -54 201 -114 233 -133 l59 -35 -38 -13 c-113 -39 -163 -172 -103 -275 35 -59 95 -93 163 -93 28 1 133 24 235 52 102 29 193 52 204 52 18 0 567 -310 596 -336 12 -12 12 -14 0 -14 -30 0 -697 -183 -732 -201 -119 -60 -129 -238 -18 -318 67 -48 102 -48 290 3 309 83 915 245 932 248 19 4 610 -334 600 -343 -4 -4 -288 -82 -632 -173 -794 -212 -778 -207 -817 -248 -17 -18 -37 -46 -42 -61 -15 -39 -14 -111 3 -150 29 -71 129 -126 199 -112 18 4 122 31 232 61 1045 281 1513 405 1531 406 24 2 607 -333 597 -343 -5 -4 -231 -66 -503 -139 -1320 -352 -1537 -411 -1564 -422 -17 -7 -46 -29 -66 -50 l-37 -37 -63 30 c-207 97 -386 263 -425 393 -11 34 -14 38 -20 21 -66 -185 -253 -346 -529 -455 -90 -35 -265 -80 -313 -80 -18 0 -33 -4 -33 -10 0 -5 13 -10 29 -10 44 0 162 -27 249 -56 302 -101 531 -285 597 -479 5 -16 10 -10 24 31 43 129 217 287 421 383 l63 30 37 -37 c20 -21 49 -43 66 -50 25 -11 537 -148 1719 -463 187 -50 343 -94 348 -98 9 -9 -572 -345 -594 -344 -9 1 -160 40 -335 87 -1008 269 -1402 375 -1431 381 -67 14 -163 -37 -199 -106 -18 -35 -18 -120 0 -162 24 -57 67 -87 168 -117 51 -15 371 -101 710 -191 340 -90 618 -166 618 -169 -1 -3 -134 -82 -298 -176 l-297 -171 -140 37 c-77 21 -328 88 -558 150 -461 123 -462 123 -537 68 -118 -85 -100 -264 33 -323 29 -12 204 -62 389 -111 250 -66 334 -92 325 -100 -25 -22 -575 -334 -590 -334 -9 0 -100 23 -204 51 -217 60 -269 64 -331 29 -141 -80 -121 -292 33 -344 l37 -13 -233 -134 c-136 -78 -251 -151 -275 -175 -150 -148 -53 -394 156 -394 31 0 72 5 91 12 19 6 128 66 244 133 116 67 219 127 230 132 19 11 20 8 20 -62 0 -67 3 -77 31 -112 60 -75 158 -97 242 -54 65 33 85 75 146 306 31 115 59 211 63 213 5 2 139 79 298 171 160 93 291 167 293 166 2 -1 -40 -164 -93 -361 -107 -396 -110 -420 -62 -493 69 -104 245 -106 312 -2 16 24 70 211 165 566 77 292 145 539 149 551 9 21 587 361 597 351 4 -3 -231 -896 -353 -1339 -29 -105 -10 -167 71 -232 34 -28 45 -31 105 -31 55 0 74 5 103 24 71 49 36 -69 504 1684 l48 178 294 170 c162 93 297 167 300 165 3 -3 -118 -464 -268 -1023 -150 -560 -275 -1036 -277 -1058 -3 -25 1 -56 11 -79 9 -21 16 -39 16 -41 0 -7 -148 -99 -209 -129 -117 -60 -215 -87 -311 -89 -47 -1 -98 2 -114 6 l-29 8 37 -42 c81 -89 116 -208 123 -414 7 -203 -21 -375 -88 -539 -16 -39 -29 -73 -29 -74 0 -2 20 23 45 56 64 85 210 221 308 286 203 135 428 203 554 167 l31 -9 -39 51 c-42 56 -83 158 -99 246 -15 83 -22 239 -13 311 8 64 8 65 43 71 19 3 49 13 65 22 17 8 370 356 785 771 415 416 758 756 762 756 5 0 8 -154 8 -343 l0 -342 -651 -650 c-442 -441 -657 -663 -670 -690 -58 -124 32 -265 168 -265 30 0 68 7 86 16 18 9 265 248 550 532 l517 517 0 -350 0 -350 -406 -405 c-228 -227 -412 -419 -420 -437 -18 -42 -18 -126 0 -162 41 -79 133 -121 220 -100 49 11 64 25 329 287 l277 276 0 -344 0 -344 -155 -157 c-196 -199 -223 -252 -176 -354 51 -112 187 -147 288 -75 l42 30 3 -297 c3 -285 4 -300 25 -339 41 -77 130 -134 208 -134 78 0 167 57 208 134 21 39 22 54 25 338 l3 297 40 -29 c101 -72 240 -37 290 75 47 103 20 156 -176 354 l-155 156 0 345 0 344 278 -276 c264 -262 279 -276 328 -287 87 -21 179 21 220 100 18 36 18 120 0 162 -8 18 -192 210 -420 437 l-406 405 0 350 0 350 518 -517 c284 -284 531 -523 549 -532 18 -9 56 -16 86 -16 136 0 226 141 168 265 -13 27 -228 249 -670 690 l-651 650 0 342 c0 189 3 343 8 343 4 0 347 -340 762 -756 415 -415 769 -763 785 -771 17 -9 46 -19 65 -22 35 -6 35 -7 43 -71 24 -195 -26 -442 -112 -557 l-39 -51 31 9 c214 61 647 -167 862 -453 25 -33 45 -58 45 -56 0 1 -13 35 -28 73 -70 171 -97 335 -89 543 7 203 42 322 123 411 l37 42 -29 -8 c-16 -4 -67 -7 -114 -6 -96 2 -194 29 -311 89 -61 30 -209 122 -209 129 0 2 7 19 15 38 8 20 15 49 15 65 0 15 -63 262 -139 547 -77 286 -201 751 -276 1033 -76 282 -136 515 -133 518 3 2 138 -72 299 -165 l294 -170 238 -888 c151 -562 246 -899 259 -919 82 -121 261 -106 328 27 27 53 25 89 -14 236 -249 923 -336 1256 -332 1260 10 10 588 -330 597 -351 4 -12 72 -259 149 -551 95 -355 149 -542 165 -566 67 -104 243 -102 312 2 48 73 45 97 -62 493 -53 197 -95 359 -93 361 2 1 134 -73 293 -166 160 -92 293 -169 297 -171 4 -2 33 -97 64 -213 31 -115 65 -225 76 -242 43 -71 131 -103 215 -78 87 26 138 102 131 196 -4 56 -3 57 16 47 12 -6 116 -66 231 -133 116 -67 225 -127 244 -133 19 -7 60 -12 91 -12 209 0 306 246 156 394 -24 24 -139 97 -275 175 l-233 134 37 13 c77 26 128 98 128 180 0 106 -84 189 -188 187 -27 0 -135 -23 -238 -52 -104 -28 -195 -51 -204 -51 -14 0 -539 298 -586 332 -15 11 32 26 320 102 186 49 361 99 390 111 133 59 151 238 33 323 -75 55 -76 55 -537 -68 -230 -62 -481 -129 -558 -150 l-140 -37 -297 171 c-164 94 -297 173 -298 176 0 3 278 79 618 169 339 90 659 176 710 191 101 30 144 60 168 117 18 42 18 127 0 162 -36 69 -132 120 -199 106 -29 -6 -423 -112 -1431 -381 -175 -47 -326 -86 -335 -87 -22 -1 -603 335 -594 344 5 4 161 48 348 98 187 49 585 156 885 236 300 81 606 162 680 182 154 40 183 53 226 100 l31 34 86 -45 c215 -112 355 -243 398 -370 14 -41 19 -47 24 -31 53 155 203 300 419 405 149 72 339 130 427 130 16 0 29 5 29 10 0 6 -15 10 -32 10 -49 0 -224 45 -314 80 -276 109 -463 270 -529 455 -6 17 -9 13 -20 -21 -39 -128 -185 -267 -401 -380 l-86 -45 -37 39 c-20 21 -50 43 -67 50 -27 11 -361 101 -1569 423 -269 72 -493 134 -498 138 -4 4 126 84 288 178 l296 171 162 -43 c89 -23 443 -118 787 -210 907 -244 847 -229 898 -216 51 14 110 64 128 108 17 39 18 111 3 150 -5 15 -25 43 -42 61 -39 41 -23 36 -817 248 -344 91 -628 169 -632 173 -10 9 581 347 600 343 17 -3 623 -165 932 -248 188 -51 223 -51 290 -3 111 80 101 258 -18 318 -35 18 -702 201 -732 201 -12 0 -12 2 0 14 29 26 578 336 596 336 11 0 102 -23 204 -52 216 -60 266 -64 331 -26 138 81 116 290 -36 342 l-38 13 59 35 c32 19 138 79 233 133 96 55 194 118 217 141 150 147 53 394 -156 394 -31 0 -72 -5 -91 -12 -18 -6 -129 -67 -247 -135 -118 -68 -222 -128 -231 -133 -15 -8 -17 -3 -13 49 7 96 -44 171 -135 197 -83 24 -168 -7 -211 -79 -11 -17 -45 -126 -76 -242 -31 -115 -60 -211 -64 -213 -4 -2 -137 -79 -297 -171 -159 -93 -291 -167 -293 -166 -2 2 40 164 93 361 107 396 110 420 62 493 -69 104 -245 106 -312 2 -16 -24 -71 -215 -169 -581 -81 -299 -152 -549 -159 -556 -23 -20 -578 -336 -583 -331 -3 3 78 316 180 696 103 381 186 708 186 727 0 44 -30 104 -69 137 -87 73 -216 55 -279 -37 -13 -20 -107 -353 -259 -919 l-237 -888 -76 -43 c-371 -216 -514 -296 -518 -291 -3 2 109 429 248 947 331 1237 307 1139 294 1185 -6 21 -14 45 -18 54 -13 30 201 155 351 205 82 27 218 37 277 21 l30 -8 -33 33 c-39 40 -85 131 -107 213 -22 80 -30 328 -15 437 15 105 46 224 83 313 15 39 28 72 28 73 0 2 -20 -23 -45 -57 -63 -83 -208 -217 -309 -285 -200 -135 -427 -203 -553 -167 l-31 9 35 -46 c63 -82 96 -178 114 -333 13 -113 4 -288 -14 -294 -7 -2 -30 -6 -52 -10 -37 -6 -99 -65 -810 -776 -424 -423 -774 -769 -778 -769 -4 0 -7 154 -7 343 l0 342 655 655 c525 525 658 663 671 697 33 86 -6 192 -86 233 -43 22 -121 27 -167 9 -15 -5 -263 -245 -550 -532 l-523 -522 0 350 0 350 406 405 c228 227 412 419 420 437 18 42 18 126 0 162 -22 41 -80 88 -123 100 -48 14 -57 14 -107 -1 -34 -10 -87 -58 -318 -287 l-278 -275 0 349 0 349 158 158 c89 90 164 174 174 195 22 49 22 98 -1 148 -50 112 -189 147 -290 75 l-40 -29 -3 297 c-3 284 -4 299 -25 338 -28 52 -95 111 -142 124 -43 12 -95 12 -136 -1z m-2185 -2248 c77 -41 242 -101 278 -101 12 0 23 -3 25 -7 3 -5 -7 -51 -21 -103 -23 -86 -26 -114 -26 -285 l-1 -190 -80 54 c-130 88 -245 137 -432 187 -9 2 -9 11 2 37 29 70 48 210 48 357 0 80 -4 156 -8 169 -6 20 3 16 67 -27 40 -28 107 -68 148 -91z m4719 44 c-14 -143 9 -361 47 -453 10 -25 11 -34 1 -36 -187 -50 -302 -99 -432 -187 l-80 -54 0 185 c-1 163 -3 196 -25 280 -13 52 -25 99 -25 104 0 4 32 16 70 26 129 33 281 106 404 195 25 19 46 33 47 32 1 -1 -2 -42 -7 -92z m-2701 -3296 l-3 -476 -403 232 c-222 128 -409 238 -417 246 -7 8 -118 406 -245 884 -128 479 -235 877 -238 885 -2 8 291 -280 652 -640 l656 -655 -2 -476z m1545 896 c-129 -484 -241 -886 -248 -894 -8 -8 -195 -118 -417 -246 l-403 -232 -3 476 -2 476 652 652 c359 359 653 651 654 650 2 -1 -103 -398 -233 -882z m-2199 -1544 c223 -129 406 -237 406 -241 0 -3 -184 -113 -410 -243 l-410 -236 -767 205 c-423 113 -821 220 -885 237 -65 17 -118 34 -118 37 0 3 123 38 273 78 149 40 544 147 877 237 333 89 610 162 616 162 7 -1 194 -107 418 -236z m2417 179 c123 -33 442 -118 709 -190 267 -71 565 -151 663 -177 97 -26 177 -50 177 -54 0 -4 -10 -9 -22 -11 -25 -6 -1269 -338 -1565 -419 l-182 -49 -411 237 c-225 130 -410 240 -410 243 0 4 606 360 816 479 1 1 102 -26 225 -59z m-5921 -156 c76 -77 202 -164 318 -219 45 -22 82 -42 82 -45 0 -3 -35 -22 -79 -42 -110 -52 -246 -145 -323 -223 l-66 -66 -69 68 c-82 81 -195 159 -315 216 -48 23 -87 44 -87 47 0 3 39 24 87 47 121 58 234 136 311 214 37 37 68 67 71 68 3 0 34 -29 70 -65z m8929 -3 c82 -81 191 -156 313 -214 48 -23 87 -44 87 -47 0 -3 -39 -24 -87 -47 -120 -57 -233 -135 -315 -216 l-69 -68 -66 66 c-77 78 -213 171 -323 223 -44 20 -79 39 -79 42 0 3 37 23 83 45 116 55 241 142 317 219 36 36 66 66 67 66 1 0 34 -31 72 -69z m-5421 -2278 c-359 -359 -653 -651 -654 -650 -6 6 475 1782 482 1784 5 2 191 109 414 237 l405 234 3 -476 2 -477 -652 -652z m1534 1371 c216 -125 400 -234 409 -243 11 -10 105 -347 248 -881 128 -476 234 -874 237 -885 3 -11 -289 275 -650 635 l-656 655 0 472 c0 288 4 473 9 473 6 0 187 -102 403 -226z m-2646 -2996 c0 -174 3 -202 26 -288 14 -52 24 -98 21 -102 -2 -5 -13 -8 -25 -8 -36 0 -201 -60 -278 -101 -41 -23 -108 -63 -148 -91 -65 -43 -73 -47 -66 -26 4 12 7 91 7 173 0 151 -18 278 -49 353 -10 25 -11 34 -1 36 188 50 321 108 442 194 39 28 70 51 70 51 0 1 0 -86 1 -191z m4249 36 c75 -35 139 -58 262 -90 10 -2 9 -11 -1 -36 -30 -72 -49 -203 -49 -343 0 -77 3 -155 7 -173 l8 -34 -74 50 c-40 28 -107 68 -148 91 -77 41 -242 101 -278 101 -12 0 -23 3 -25 8 -3 4 7 50 21 102 23 86 26 114 26 285 l1 190 80 -54 c44 -30 121 -73 170 -97z"/> </g> </svg>' 
        
        const snow3 = '<svg class="sec01_svg" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1128.000000 1280.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M5535 12794 c-71 -12 -195 -56 -260 -94 -168 -99 -277 -234 -346 -430 -22 -61 -23 -83 -27 -382 -2 -175 -5 -318 -8 -318 -2 0 -25 16 -51 37 -59 44 -166 95 -253 119 -87 24 -271 24 -360 1 -201 -53 -384 -198 -475 -377 -62 -124 -80 -199 -80 -345 1 -143 15 -215 65 -320 16 -33 283 -429 594 -880 l565 -820 1 -647 c0 -357 -2 -648 -4 -648 -10 0 -1103 634 -1118 649 -9 9 -193 387 -408 840 -461 970 -455 958 -513 1038 -89 121 -250 227 -407 269 -89 24 -282 25 -368 1 -264 -72 -461 -268 -532 -530 -16 -58 -22 -107 -22 -192 0 -63 3 -119 7 -125 3 -5 4 -10 1 -10 -2 0 -111 61 -241 136 -247 143 -322 176 -445 195 -325 50 -669 -142 -792 -443 -118 -291 -49 -612 178 -827 68 -64 118 -98 317 -211 130 -74 236 -137 237 -140 0 -3 -21 -13 -47 -22 -67 -24 -163 -90 -231 -158 -119 -119 -192 -271 -213 -444 -33 -261 92 -530 317 -686 96 -66 203 -109 318 -126 100 -15 4 -21 1407 91 l686 55 561 -322 c309 -178 561 -325 561 -328 0 -3 -252 -150 -561 -328 l-561 -322 -686 55 c-1403 112 -1307 106 -1407 91 -326 -49 -575 -294 -630 -621 -48 -284 83 -572 333 -736 42 -27 93 -54 114 -61 22 -6 39 -14 39 -17 -1 -3 -107 -67 -238 -141 -201 -115 -249 -146 -317 -212 -384 -367 -280 -991 202 -1209 78 -36 223 -69 303 -69 166 0 265 36 555 204 129 75 238 136 241 136 3 0 2 -5 -1 -10 -4 -6 -7 -62 -7 -125 0 -180 51 -329 159 -466 92 -118 241 -215 393 -256 89 -24 270 -24 365 1 161 41 320 146 412 269 51 69 114 196 587 1192 l328 690 555 320 c305 176 559 322 564 323 5 2 9 -267 9 -645 l-1 -648 -565 -820 c-311 -451 -578 -847 -594 -880 -50 -105 -64 -177 -65 -320 0 -146 18 -221 80 -345 91 -179 274 -324 475 -377 89 -23 273 -23 360 1 87 24 194 75 253 119 26 21 49 37 51 37 3 0 6 -143 8 -318 4 -299 5 -321 27 -382 89 -251 261 -421 501 -497 74 -24 102 -27 210 -27 102 0 139 4 200 23 247 77 422 248 511 501 22 61 23 83 27 382 2 175 5 318 8 318 2 0 25 -16 51 -37 57 -43 163 -93 253 -119 87 -24 269 -25 360 -1 202 53 382 196 475 377 62 123 80 199 80 345 0 144 -15 215 -65 319 -16 33 -283 430 -594 881 l-565 820 -1 648 c0 374 4 647 9 645 5 -1 259 -147 564 -323 l555 -320 328 -690 c489 -1030 544 -1141 600 -1210 169 -205 454 -311 710 -262 382 73 642 418 603 800 -3 34 -5 63 -4 65 1 1 109 -59 239 -134 248 -143 323 -176 446 -195 325 -50 669 142 792 443 118 291 49 612 -178 827 -68 64 -118 98 -317 211 -130 74 -236 138 -237 141 0 3 17 11 39 17 55 17 178 100 240 163 158 159 240 393 211 606 -45 341 -296 597 -634 649 -100 15 -2 21 -1407 -91 l-686 -55 -561 322 c-309 178 -561 325 -561 328 0 3 252 150 561 328 l561 322 686 -55 c1405 -112 1307 -106 1407 -91 192 29 367 130 478 275 92 120 137 228 156 374 29 213 -53 447 -211 606 -62 63 -185 146 -240 163 -22 6 -39 14 -39 17 1 3 108 67 238 141 219 125 244 142 328 225 78 77 98 104 138 185 55 114 75 185 83 305 16 245 -99 486 -304 631 -208 149 -482 183 -713 90 -31 -13 -159 -82 -284 -155 -126 -72 -230 -130 -231 -129 -1 2 1 31 4 66 34 328 -160 643 -468 761 -298 114 -643 23 -844 -224 -62 -76 -68 -89 -532 -1065 -212 -448 -394 -822 -403 -831 -15 -15 -1108 -649 -1118 -649 -2 0 -4 291 -4 648 l1 647 565 820 c311 451 578 848 594 881 50 104 65 175 65 319 0 146 -18 222 -80 345 -93 181 -273 324 -475 377 -91 24 -273 23 -360 -1 -90 -26 -196 -76 -253 -119 -26 -21 -49 -37 -51 -37 -3 0 -6 143 -8 318 -4 299 -5 321 -27 382 -112 317 -371 516 -686 525 -55 2 -113 1 -130 -1z m243 -406 c69 -26 154 -108 190 -185 l27 -58 5 -881 5 -882 290 421 c160 232 307 438 327 459 129 130 349 133 493 7 104 -92 144 -273 88 -399 -11 -25 -286 -432 -611 -904 l-592 -858 0 -1039 c0 -572 3 -1039 8 -1039 4 1 410 233 902 518 l894 517 446 937 c245 516 460 957 477 982 66 94 200 154 315 142 126 -13 251 -101 300 -213 25 -58 35 -166 19 -227 -6 -24 -110 -253 -231 -507 -121 -254 -220 -466 -220 -471 0 -5 17 2 38 15 124 78 1441 833 1476 845 61 24 178 20 248 -7 80 -31 150 -98 190 -179 29 -60 32 -76 32 -152 -1 -73 -5 -94 -31 -150 -17 -37 -49 -83 -74 -107 -28 -26 -302 -190 -758 -453 -392 -226 -724 -416 -737 -422 -13 -6 -24 -14 -24 -17 0 -3 235 -25 523 -48 443 -35 531 -45 579 -63 76 -28 159 -104 195 -178 25 -51 28 -68 28 -157 0 -90 -3 -105 -28 -153 -62 -118 -167 -191 -286 -200 -37 -2 -511 31 -1092 78 l-1026 82 -894 -516 c-492 -284 -895 -520 -897 -524 -1 -4 401 -241 895 -526 l897 -518 1025 82 c574 46 1055 80 1091 78 117 -9 220 -78 281 -190 32 -60 34 -68 34 -163 0 -89 -3 -106 -28 -157 -17 -34 -50 -77 -82 -107 -95 -86 -99 -87 -695 -135 l-525 -42 95 -56 c52 -31 385 -223 740 -428 413 -238 661 -387 689 -413 25 -24 57 -70 74 -107 26 -56 30 -77 31 -150 0 -76 -3 -92 -32 -152 -40 -81 -110 -148 -190 -179 -69 -27 -187 -31 -248 -8 -32 12 -1095 621 -1441 825 -40 24 -73 40 -73 36 0 -4 99 -216 220 -471 121 -254 225 -483 231 -507 16 -61 6 -169 -19 -227 -31 -70 -111 -149 -185 -183 -84 -38 -184 -40 -276 -5 -96 37 -155 100 -220 236 -29 61 -201 421 -381 800 -180 380 -361 760 -402 846 l-75 155 -895 517 c-492 284 -898 517 -902 517 -3 0 -6 -467 -6 -1039 l0 -1039 592 -858 c325 -472 600 -879 611 -904 56 -126 16 -307 -88 -399 -144 -126 -364 -123 -493 7 -20 21 -167 227 -327 459 l-290 421 -5 -882 -5 -881 -27 -58 c-37 -79 -120 -159 -195 -187 -79 -30 -187 -30 -266 0 -75 28 -158 108 -195 187 l-27 58 -5 881 -5 882 -290 -421 c-159 -232 -307 -438 -327 -459 -129 -130 -349 -133 -493 -7 -104 92 -144 273 -88 399 11 25 286 432 611 904 l592 858 0 1040 c0 891 -2 1039 -14 1035 -24 -9 -1770 -1019 -1783 -1031 -7 -6 -202 -409 -433 -896 -232 -487 -435 -914 -452 -950 -114 -238 -412 -290 -588 -104 -28 30 -61 75 -72 101 -26 58 -35 166 -19 229 7 25 111 254 231 507 121 254 220 465 220 468 0 4 -334 -186 -743 -422 -408 -236 -760 -435 -782 -442 -22 -6 -71 -11 -110 -11 -140 2 -256 76 -317 202 -29 60 -32 76 -32 152 0 106 32 184 102 253 34 33 228 150 692 417 355 205 688 397 740 428 l95 56 -525 42 c-596 48 -600 49 -695 135 -32 30 -65 73 -82 107 -25 51 -28 68 -28 157 0 84 4 107 24 147 57 117 171 197 290 206 37 2 510 -31 1091 -78 l1026 -82 897 518 c494 285 896 521 895 526 -2 4 -405 240 -897 524 l-895 516 -1025 -82 c-581 -47 -1055 -80 -1092 -78 -119 9 -233 89 -290 206 -20 40 -24 63 -24 147 0 89 3 106 28 157 17 34 50 77 82 107 95 86 99 87 695 135 l525 42 -95 56 c-52 31 -385 223 -740 428 -463 267 -658 384 -692 417 -70 69 -102 147 -102 253 0 76 3 92 32 152 40 81 110 148 190 179 69 27 187 31 248 8 32 -12 1089 -617 1441 -825 40 -24 73 -40 73 -36 0 4 -99 215 -220 469 -121 254 -225 483 -231 508 -16 62 -7 170 19 228 49 112 174 200 300 213 116 13 264 -57 323 -152 13 -21 224 -459 469 -974 l445 -935 895 -517 c492 -285 898 -517 903 -518 4 0 7 467 7 1039 l0 1039 -592 858 c-325 472 -600 879 -611 904 -56 126 -16 307 88 399 144 126 364 123 493 -7 20 -21 168 -227 327 -459 l290 -421 5 882 5 881 27 57 c83 178 277 255 466 186z"/> </g> </svg>'
        
        
        
        
        
    const data = [star, snow2, snow3]
    const max = 15
    let particles = []

    class Ball {
        constructor(shape) {
            this.shape = $(shape)
            this.speed = 2 + Math.random() * 3
            this.vx = (Math.random() * this.speed) - (Math.random() * this.speed)
            this.vy = (Math.random() * this.speed) - (Math.random() * this.speed)
            this.radius = 10 + Math.round(Math.random() * 50)
            this.w = window.innerWidth
            this.h = window.innerHeight
            this.x = (this.w - this.radius) / 2
            this.y = (this.h - this.radius) / 2

            $(window).on("resize", this.resize.bind(this))
            this.render()
        }

        render() {
            $(this.shape).css({
                width: this.radius,
                height: this.radius
            })
            $("#canvas").append(this.shape)
        }

        resize() {
            this.w = window.innerWidth
            this.h = window.innerHeight
        }

        move() {
            this.x = this.x + this.vx
            this.y = this.y + this.vy

            this.shape.css({
                left: this.x,
                top: this.y,
                transform: "rotate(" + this.y + "deg)"
            })

            if (this.x < 0 || this.x > this.w - this.radius) {
                this.vx = -this.vx
                $(this.shape).toggleClass("highlight")
            }
            if (this.y < 0 || this.y > this.h - this.radius) {
                this.vy = -this.vy
                $(this.shape).toggleClass("highlight")
            }
            return this
        }
    }


    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    for (let i = 0; i < max; i++) {
        particles.push(
            new Ball(data[randomInt(0, data.length - 1)])
        )
    }

    function update() {
        particles = particles.filter(function (p) {
            return p.move()
        })
        requestAnimationFrame(update.bind(this))
    }
    update()
}

export default canvas