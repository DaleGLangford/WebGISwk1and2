# WebGISwk1and2
Web GIS Week 1 and 2 checklist

# Directions API:
## Directions from Disney to Univeral Studios
**URL:** 
https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyA9JiOUjKB61eY3aT_ZmBv5K4u8tjX_d9g    

**Results:**
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJa147K9HX3IAR-lwiGIQv9i4",
         "types" : [
            "amusement_park",
            "establishment",
            "point_of_interest",
            "tourist_attraction"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJzzgyJU--woARcZqceSdQ3dM",
         "types" : [
            "amusement_park",
            "establishment",
            "point_of_interest",
            "tourist_attraction"
         ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 34.1358593,
               "lng" : -117.9221251
            },
            "southwest" : {
               "lat" : 33.8160535,
               "lng" : -118.3517014
            }
         },
         "copyrights" : "Map data ©2021",
         "legs" : [
            {
               "distance" : {
                  "text" : "34.9 mi",
                  "value" : 56098
               },
               "duration" : {
                  "text" : "38 mins",
                  "value" : 2274
               },
               "end_address" : "100 Universal City Plaza, Universal City, CA 91608, USA",
               "end_location" : {
                  "lat" : 34.1358593,
                  "lng" : -118.3511633
               },
               "start_address" : "1313 Disneyland Dr, Anaheim, CA 92802, USA",
               "start_location" : {
                  "lat" : 33.8160535,
                  "lng" : -117.9224058
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 464
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 50
                     },
                     "end_location" : {
                        "lat" : 33.8201231,
                        "lng" : -117.9228153
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e towards \u003cb\u003eDisneyland Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "iukmE`vvnUAAUGOEWGYGe@Ia@GQAQAQAQAQ?G?[??@c@?M@U@_@@C?_@D]HqCp@_@HC@_ATC@K@]JKDID[DG?EA"
                     },
                     "start_location" : {
                        "lat" : 33.8160535,
                        "lng" : -117.9224058
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "256 ft",
                        "value" : 78
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 33.8207878,
                        "lng" : -117.9230963
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eDisneyland Dr\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "wnlmErxvnUUJc@LEBeAX"
                     },
                     "start_location" : {
                        "lat" : 33.8201231,
                        "lng" : -117.9228153
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.6 mi",
                        "value" : 4183
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 150
                     },
                     "end_location" : {
                        "lat" : 33.8437993,
                        "lng" : -117.9557998
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to merge onto \u003cb\u003eI-5 N\u003c/b\u003e towards \u003cb\u003eLos Angeles\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "}rlmEjzvnUi@MICEASIcA]{@[C?SGSGMEMEC?KCSAEAMAO?E?]@C?E@E?MBE@I@IBKBA@UJE@EBIDGDKF{AtAs@l@y@r@y@r@_At@WTs@l@qAjA_@\\]p@}ApAg@b@iAdA}BbCSTYXw@z@[ZyB`Cs@v@ST]^CDyBdCw@x@qBtB}@~@_AbA{@|@s@x@KLEBEDSPGF_BhCa@r@Wh@Wf@Sf@c@jAOb@K^ITW`AMd@_@xAWnAU`Bm@jEi@`Eu@hFOv@GXWlAMh@e@|AM`@M^KX{@vBuAzCSd@aGrMwDvISd@aEjJgB|DsBtEaF~KMVm@rAWn@i@jAg@fA[p@[l@aAdBe@x@"
                     },
                     "start_location" : {
                        "lat" : 33.8207878,
                        "lng" : -117.9230963
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.8 mi",
                        "value" : 7776
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 263
                     },
                     "end_location" : {
                        "lat" : 33.8823716,
                        "lng" : -118.0255065
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eI-5 N\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "wbqmEvf}nUm@fA}@|AQZYd@[h@U`@QZ[l@c@|@_@v@{@rBUn@m@~AEHs@lBk@|AsB~EaC~F_A`C_@~@Uf@[t@aChGQf@{CjHyAjDiAhCoAxCmDhIkApCkAdCEFoA|B_@j@Yf@gA~Aa@l@g@p@W^a@j@GHgAtAu@dAiCpDY\\aB|Be@z@?@A@IPKRA@?@GJSd@_@~@Qh@Qh@WdAADAFGZYrA[xAId@GREVSbAU~@k@vB[lACF_AzE?@YlAMl@ADWbAOn@}@hCQh@k@~AcB~DYp@Wh@INgAzBc@x@QZgBzC_BpC[f@c@t@U^KPqB`ESb@ABQ^g@fASb@Sf@c@`AoAtCe@fAaBtDg@hAy@jBsAbD}@nBOZKV]v@oArCSb@Q`@?@Sb@aBpDi@hAy@lBKVsAnCABGHGNINEJCJGJGRc@`A[t@c@`AoAlCmBjEMZ]t@_@z@w@bBe@|@c@r@OTOTA@SZCBc@r@a@h@g@n@e@j@Y^QRkAfAsBlBoBfCi@v@W^g@v@[d@s@jACDa@n@IJABSZ{@xAmAzB_CrFeAnCYz@Wz@ENKXoAzDeB|E]`ACHELITGNYx@ENKTkApCe@fAOZ}@rB{@lBQb@Yp@}@rBaAzBIN]x@Sb@u@fBiBdE"
                     },
                     "start_location" : {
                        "lat" : 33.8437993,
                        "lng" : -117.9557998
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12.6 mi",
                        "value" : 20356
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 816
                     },
                     "end_location" : {
                        "lat" : 34.0151967,
                        "lng" : -118.1701571
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eI-5 N\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "ysxmElzjoUsAdDiAtB_BxCaAfB}AvCUd@w@bBQ^O\\y@tBa@fAIVq@zAgA~BGJgBjD[f@GLELIREJsA`Dc@bASj@y@rBa@~@aA|B[x@e@hA]z@a@bAsAhD?@uCbHSd@O`@g@jAABm@vAsA`DmB`FIPwC~GiF|Ky@`BGJmBvD{AzCsFxKQ\\yC`Gw@fBoDzHu@|A}B~EqCtG{@nB_@x@Q`@[p@KTKToApCu@zAaAdBc@r@a@r@kAnBmAnBaB~BW\\qAdBi@p@m@r@EDgBnBaChCmChCEBeAfAuCrCgAdAKJmBlBgBbBoArAwA~AyAfBm@x@c@p@sAvBqAhCwAnCu@bBu@dBq@zAq@vAi@dAs@pAs@hAg@p@iBnC_BzBcApA{A`B{A`Bk@h@o@j@cAt@]X]XcDvBw@d@w@d@}CnBi@^y@f@w@d@KFIFOJOJEDQJEB[PsDzBgBhA{ClB{@j@YP}HzE_@TyA~@A?{BtAA@[RA?]T}BtA]RA@}@h@}BrAwA|@{BvAi@Xg@Ze@XaBlAwCpB{@l@kD`CgA|@_@ReCxAoG`EcAn@SLm@^wAz@a@Vu@`@kF`D_@R?@wBlAGBoBjA}BrAKFGDu@b@k@Xi@XWNcB`Aa@VoDvBwCbBcAn@}@h@sBhAe@Ve@V[RMF_@Ru@b@GDm@\\yAz@SJc@VeAn@q@`@}A|@sBjA}@h@]TcDjBkAp@cAl@ID}@h@wCdB_@T_@T_Ap@y@n@g@b@i@f@_@^a@`@UXm@r@_@b@a@j@QVwAvBk@|@A@W^cA~AeA`B{BhDgAbBg@t@uAxBg@t@uCnEgA`Bc@p@a@p@s@fAY`@oCdE}@tASZw@lAiIhMW^uBbDW^gAdBSXSZg@n@MPEDe@j@_@^[\\kAdAe@\\UNOLs@d@CB}@j@sAr@e@TC@MD[Lq@Vs@R_B`@iE|@WFqDr@sAZs@NWDcB^ODc@HcB\\C@]HaAP}A\\c@Jg@JgAZi@Nu@XiAd@gAh@eAl@MHKFe@TOHc@Xe@\\g@ZONa@ZcAr@_C~A[PeAr@SNyB|A_@\\cAz@qAnAoApA_A|@{A|AYX_A~@}@|@eAbAs@t@uBtBoBpBmAlA{AzAm@j@YZ]\\kAhAeAhAg@f@KLOPs@|@a@n@QXq@fA{@vAy@tA]l@[b@w@nA]b@c@h@YZ[\\w@x@WVCBKJA@MN_@\\s@p@wAvAoAnA}@x@y@v@A@eB~Ao@l@cA`Ai@h@aIrHiJzIONoBjB_@Zc@`@ED]Za@^a@^ONi@b@u@j@q@f@cAj@IDYPo@^w@\\w@b@y@d@ID]PA@g@\\_Ap@w@n@EDeBbBwCpCmBbB}AxA_CvB}AvAu@r@cA`AoAtAgEdFgBtBY\\aCrCwAjBa@r@[d@i@|@S^Wf@g@`AYj@o@fAS\\QVg@n@[b@_@d@c@d@i@h@UTs@l@uBhBw@r@OLED]\\m@n@m@n@k@v@a@l@[h@s@nAi@pAeAxCO^IPWt@Od@MZCFy@dCw@xBOb@cCbHcAtCaAvCWbAm@pCy@lE"
                     },
                     "start_location" : {
                        "lat" : 33.8823716,
                        "lng" : -118.0255065
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 mi",
                        "value" : 3574
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 144
                     },
                     "end_location" : {
                        "lat" : 34.0256221,
                        "lng" : -118.2059515
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eI-5 N\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "_rrnEnbgpUq@rC_@bAYp@KVg@dAq@pAOXIPA@A@Ud@MXABEJGNCFAB[t@ADADi@~ASl@EPITWt@eAzC_AvCkCrHa@hA?@A?ENs@lBe@vAYbAK`@ABU~@CLMt@m@vDMrAMrA?@OtDC`G?bIBpK@lB?nE?rEA`D?@Ct@EjAC`@C`@Gt@MrAE^Ih@Mz@QfAKh@Mf@Qt@Of@W|@Sp@wBpGiAfD{@jCQf@Od@q@pBOf@eBdFAFaB|EaBfF}AvE_@hAMb@_@pA[lAELI\\M`@"
                     },
                     "start_location" : {
                        "lat" : 34.0151967,
                        "lng" : -118.1701571
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "11.7 mi",
                        "value" : 18764
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 774
                     },
                     "end_location" : {
                        "lat" : 34.1291624,
                        "lng" : -118.3472425
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork to continue on \u003cb\u003eUS-101 N\u003c/b\u003e, follow signs for \u003cb\u003eLos Angeles N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCivic Center\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "cstnEdbnpU?b@CPCNg@xBW`AMf@Od@Ut@cArCmAnDKXIXSj@o@lBQd@_CzGwAfEIPM\\_@hA[~@_AnCe@vAi@zACDWn@a@dAWp@u@fBO\\S`@]p@IPCDGLMTOZ]j@]h@QZc@j@W\\UZe@j@KNGDABC@C@SHiAhAA?EDw@x@[Zs@h@m@`@]TKDQLQF[NEBSJE@KDMDiAXC@]JWDg@FOB]Dy@DU?_@@u@As@EoBWy@Gu@Ek@?GAW?_@@[BmAFy@Fa@@U@a@?W?a@Aa@CC?]C]Cu@KsB[oC]}CU]Ak@Ae@?wA@iB@oC@k@?}AF]@K?aAHS@k@Di@Hm@Fm@JyAXi@L_Bb@C@_A\\c@PsAh@UHeAh@_@L]Nc@Pc@Pe@R}@\\{An@WNUNA?ML_@XMNIJQRQVGJABIJQ^[z@A??BEJOd@CLAHCJAHCP?HCNAPARAb@Er@?HAF?DAJ?DADG^AJC^AFATCJ?DAJOnAU~BKhAEZC`@CNMrAKpAQzBMtAOzBCRGbAAJK|ACRAT?TCv@ARCVEZIdAGbA?BCZEbACj@CdAAz@Bv@@J@PDbA?j@At@Ab@C\\Gp@CNGZG\\I^GPCJUl@Wn@CHCDIPOZOVa@v@_@n@MVS\\QZGLYh@S^QZGJGJIPKPGJmA|Bk@fA_@p@k@dAS`@o@jA]n@QZ]n@_@p@KNs@lAMRKP]h@w@pAm@v@U\\CBUXCDSVmAzAST_@`@i@h@g@d@g@b@UPURSPA@eBvAOLiAz@k@d@eBtACDi@b@GD]XEDUPURGD_@ZYXSRONY\\QTY`@UZW^g@x@]h@GHq@dASXW`@[`@S\\e@p@w@lAINe@p@U`@m@|@A@cA~Aa@p@OXg@`AMXYl@Q`@O\\Wr@O^GPGR[~@ELMd@?@K\\_@tA?B[nAi@tBa@zAcAbE_@xAWdAABu@zCCD[nAK`@ADe@jBMf@Mf@Mf@YhAQj@Oh@q@vB[x@Yx@]dAc@nAa@nAADc@jA]fAABQd@a@jACLYv@KX]jAY~@_@fAAHGNGTADyAvEc@jAGPIRu@jBg@lAc@fAM^K\\Od@m@nBa@|AYdAKb@Mj@ET_@lBw@dE]~Au@~Dq@rDWlAUlACHAJMn@I`@I`@If@YjB]`CO`A?@Kr@?DCP_@nCm@~DQpAAJQdACTETc@fDMjAShBKlACPGh@Ij@Ij@Mx@[hBId@Ot@c@hBCJMj@Qj@c@lAKZUj@CDO^[p@Yr@CDSb@S`@MZEJe@fAYn@eAhCO^}@dC}@`Cm@dBQd@y@|BsArDSh@g@rAEHSb@_@x@?Ba@t@KRSb@Wd@CD]n@c@x@o@bAe@t@c@t@_@l@ILILABMTKPMPqBfD{AbCu@hAOVmAjBQTILg@l@g@n@i@f@k@j@k@d@e@^w@n@]T{@f@]TC@wAt@iExB]RA?}@d@[NCBq@\\k@XUN[P]To@d@URa@`@i@h@WVc@n@QTQVMP_@n@i@`AEJAB]l@o@lA_AfBc@x@eAjBg@~@m@dAq@`AILORg@r@e@l@QREFa@^_@^KHYV[Tq@h@YPe@`@_Ah@EDwAt@k@VoAn@}GhDyAt@a@Pe@Vg@Tu@^s@b@]T]X]VSRURYZg@l@UVOTU\\g@~@i@fA]|@Y~@g@zBG\\Mv@E`@E\\Gx@A@?RCXC|@A^?h@?^?TA^Av@?F?Z?~@Cn@?@A`@Cb@G|@ALCRE\\G\\CRABEVEPAHK`@K`@Oj@i@xAQ^Wj@Wh@]l@u@vAu@vAOZEFU`@]r@[r@{@`BcDvGu@zAkAzBm@lAQXkA`Cg@|@[n@[j@KL[f@W\\EFY^[^c@b@GFCD]XMJm@f@w@h@w@`@y@^w@VgAZw@Rs@NmBd@eE`Ac@J_Ez@uBb@}AX{@NsB\\sAZwAf@iA`@kAd@gAh@cAl@aAj@gAv@{@n@cAx@o@j@y@x@s@z@i@n@m@t@]`@kB~BSR{@jAcAlA[^Y\\[`@SVA@WZe@f@g@f@ONi@d@C@EDOJe@\\E@ABu@d@GDA?gB`ASL[RYRWPQLQL_@\\MLQPg@h@gBhBCDIDOPGFOPONSRw@x@_A~@"
                     },
                     "start_location" : {
                        "lat" : 34.0256221,
                        "lng" : -118.2059515
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 222
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 34.1307998,
                        "lng" : -118.3485738
                     },
                     "html_instructions" : "Take exit \u003cb\u003e11B\u003c/b\u003e towards \u003cb\u003eUniversal Studios Bl\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "gzhoEfuiqUWDE@y@r@MJURYXA?IHe@`@]ZUTKHGHMHOLCBUD"
                     },
                     "start_location" : {
                        "lat" : 34.1291624,
                        "lng" : -118.3472425
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 447
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 34.1338819,
                        "lng" : -118.3515888
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eW.C. Fields Dr\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "odioEp}iqUMLSLYNEBYNe@Xk@^]T]TQLMH_@Tm@l@[b@U\\S\\CDQZGLKNGLGFCFEDCBCBCBC@EDEBEBC@EDCBEBEBCB?@CBC@CBEFCBCDEDEFINUd@"
                     },
                     "start_location" : {
                        "lat" : 34.1307998,
                        "lng" : -118.3485738
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 234
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 34.1358593,
                        "lng" : -118.3511633
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUniversal Studios Blvd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wwioElpjqUQNA@A@A?A@C?C?A?A?A?C?CAA?CAAAA??AA?CAEAC?A?A?A?A?A?A?OQCAAAECUMGCGCECGCGCICICICGAECKACAGAIAGAGAG?IAQAMAI?IAI?K?I@O@IA"
                     },
                     "start_location" : {
                        "lat" : 34.1338819,
                        "lng" : -118.3515888
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "iukmE`vvnUsDs@kBCgBDsE`AgD|@_ANi@PeAXi@MOEwAg@gBk@cBUqAJkAf@{KlJqBhB]p@}ApAqBhBqCxCgFrFiBrB}O~Pg@b@qDnGsAvDoAvEeC~PeBhKoAhEqDrI{a@h_AwCvG_D~FwF|JuCxGsCtH{Op`@{Udj@qEpHcCjDoGvIaDxEu@|A{AxEe@|Bs@jDqBhIuCzMoArDoC~GcCfF_JrOmG~MqVzj@}I~RiFjLaDpGgDzE}CfDsBlBoBfCaAvA{BnDaAzAiCtEeEbKcA`DiGrQuS~e@}CzGaD`G}D`IuBrFiFrKeEtJsJ~UeJvTwBrFaK|TkG`MwM`XuNn[gHvOsE|HyGrJeEzE{I~IwIrIiJ~JqAjBeD`GuFtLcExHuHnKsGxGcH`F_MxHuJdGaa@tV{JbGgItFoI`GmNxIaRzKkJnFy]lSyb@zVyDlCsClCeC|CwCnEkOtU_QzWwSv[oAbBmDnDkAz@iEhCsAj@eBj@iH~AqIfBoDt@yLlCqFxBeCtAwJ|GoFrDeGzFcPbPqOtOwBdCaDhFkDvF{AhBkCpCem@lk@{FbFyCjByEfCqAv@cFjEcNfMgHbHkMlO_EbGmBtD}BlDiCxCwF`Fs@p@iDdEoAxBoBjFaAlC}Kx[qDvPmBrEsB`EaFtNoIlV}@hD_AzFk@~I?v]?rTMdD_@jEu@vEgAbEqGvRoKz[eFrPCt@k@hCkAdE}JrY{HdUmEfKaChEqClDqFzEqDrBkEbA}BNuA?cD]cDOaDLsCJ_BEeFo@mHs@iACwJDsDHkDZuDl@mEpAsEnB}IrDeAv@{@fAcAzBe@zBg@fHaAtJyAzQgAhSFzIWzB]zAaCjF{CtFqLpTkFhI{BrCeCfCiH~FaG|EuCpCyEfHiF|HqFhJoCfHeCrJmJj_@eK|ZwBbHoChIoC`HkBpGy@jDkGb\\iB~K_CpPoBhPcBrKgAlEiAzCeCxFqItTcGzOoEfIyC`FkKnPeDpDgDjC}MhH}BjA_C|AyBvBuAnBcG~KmErHgBbCmE|DeCbBqNfHiEtBeDrBaBzAcBxBqAfCw@|BcArFYnGG`Ha@bF{@zDkBnEyCxFwLbVsGxLaDpDkD~BqFfBkKbCoMhCgEx@aDhAsCnAeCxAwFlEeEzEoJnLyD|DcC`BqDvB{AjAuExEkBnB_A~@WD_At@}@x@oAfAw@r@w@d@}D`C}AbAsBlC}@|Ag@`@mArAk@x@K@UE]EgAs@gA[iAM{AA"
         },
         "summary" : "I-5 N and US-101 N",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}

## Directions from Thatchers Cider Shop to Leg Bender Cider Shop
**URL:**
https://maps.googleapis.com/maps/api/directions/json?origin=51.333590689260966, -2.8343742083060772&destination=51.2806613659188, -2.772229416903575&key=AIzaSyA9JiOUjKB61eY3aT_ZmBv5K4u8tjX_d9g

**Results:**
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ43rv6Mn3cUgR67nXoKGa0dI",
         "types" : [ "establishment", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "Eh0yIEIzMTM1LCBDaGVkZGFyIEJTMjcgM1FBLCBVSyIaEhgKFAoSCVXqMaZ5HnJIEetn5heQh-w1EAI",
         "types" : [ "street_address" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 51.3347181,
               "lng" : -2.7720494
            },
            "southwest" : {
               "lat" : 51.2793415,
               "lng" : -2.834613
            }
         },
         "copyrights" : "Map data ©2021",
         "legs" : [
            {
               "distance" : {
                  "text" : "10.4 km",
                  "value" : 10448
               },
               "duration" : {
                  "text" : "14 mins",
                  "value" : 852
               },
               "end_address" : "2 B3135, Cheddar BS27 3QA, UK",
               "end_location" : {
                  "lat" : 51.2806114,
                  "lng" : -2.7720494
               },
               "start_address" : "Myrtle Farm, Station Rd, Sandford, Winscombe BS25 5RA, UK",
               "start_location" : {
                  "lat" : 51.3328128,
                  "lng" : -2.834613
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "2.9 km",
                        "value" : 2913
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 233
                     },
                     "end_location" : {
                        "lat" : 51.334625,
                        "lng" : -2.7937
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003eStation Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eA368\u003c/b\u003e towards \u003cb\u003eOrchard Dr\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow A368\u003c/div\u003e",
                     "polyline" : {
                        "points" : "a}hxHhshP@M@Q@}@@K@y@@e@?S@_@@]@S@_@@OBKFe@D]BS@Q@UBq@Do@@_@Fi@De@Fk@B[@Q?Q@M?a@Ck@Ac@Eq@Gu@Iy@Ks@Ku@Ii@Ee@SqBEc@U{AK{@Gi@OaAIm@CQAOAIAKCc@G{@IuAG_BCm@Cy@Cy@C}AC}@AuAAsBCaA?Q?KASE[Ca@Es@EaAC_BAaAA{B?y@?Y?iA@aABeBDmA@QJwC?IJiBRmCFu@Fi@Hm@Fe@DYJc@H]Ja@Ni@DQDQDU@EFc@BU@M@O@M?K@a@AM?a@A_@C}@?OIqBE_AGcAKeBI{AKwAMyAEu@C[AQ?SAYC_AK{E?MCo@KoFEqBAo@AkB?[A]AYAUC[C]Ge@WsCQkBMoAIo@G_@O}@Kk@C]Eg@Ag@Ck@AmA?CAUAi@GiBKyBK_CEw@CWCWE]Ga@UkAOq@COCOCSAMAG?C?I?C?A@KDSJa@"
                     },
                     "start_location" : {
                        "lat" : 51.3328128,
                        "lng" : -2.834613
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1322
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 96
                     },
                     "end_location" : {
                        "lat" : 51.32389329999999,
                        "lng" : -2.7976502
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNew Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eA38\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow A38\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "khixHrs`Pb@XNHLDRHNDl@PdAR`ARzATn@Hp@Nd@Nd@Th@T~Av@`@RZPZR|@l@tAhAlB`B~@r@x@j@dBtA^ZLHNHB@HDJDNB`@D`@?N?R?D?pAIRA^C`@In@SJEPIRQFEJMNSHIRWV]RWVW\\UNIRITGTALAH@B@B@D@FBFDFFHJJNJPFNDLDLJ`@Nt@P|@"
                     },
                     "start_location" : {
                        "lat" : 51.334625,
                        "lng" : -2.7937
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 883
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 51.31618710000001,
                        "lng" : -2.7983915
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNew Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iegxHhlaPl@^RL`C|ATNl@VHD~@DdAC`@Mf@OTEFALAVAP?NBD@t@VPHXHVHh@Hr@LVBX@`@@t@?\\AN?ZC^E\\Ih@Ip@Wd@W|@a@DAl@MV?PCxAVrAR"
                     },
                     "start_location" : {
                        "lat" : 51.32389329999999,
                        "lng" : -2.7976502
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 236
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 51.3140994,
                        "lng" : -2.7988726
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTurnpike Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "euexH|paPjBRnANhCPv@NDB\\T"
                     },
                     "start_location" : {
                        "lat" : 51.31618710000001,
                        "lng" : -2.7983915
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 95
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 51.3134075,
                        "lng" : -2.7996691
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eThe Square\u003c/b\u003e",
                     "polyline" : {
                        "points" : "chexH|saPZVPTXd@Z^HJPTHH"
                     },
                     "start_location" : {
                        "lat" : 51.3140994,
                        "lng" : -2.7988726
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 917
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 68
                     },
                     "end_location" : {
                        "lat" : 51.3059257,
                        "lng" : -2.7969286
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCuck Hill\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ycexH|xaPLLPNFFTR^Z@?^Td@Z`Aj@jAd@|@b@@?TDLANALAd@OJGVO|@q@NKn@k@j@k@NQLQLQNUJKJMDCBCxBoAl@a@\\[LOVWPOFGJGLITOHE~BuADAlAo@t@e@JGv@c@`@U^O"
                     },
                     "start_location" : {
                        "lat" : 51.3134075,
                        "lng" : -2.7996691
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2310
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 168
                     },
                     "end_location" : {
                        "lat" : 51.2873504,
                        "lng" : -2.7900278
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eShipham Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "aucxHxgaPHC@Az@WdA]dA[DC`Ba@b@K@?`@I`@Ib@IrAWTEb@I@?JALEDEHEVOt@g@h@c@^Y`@YtAeAHETSHGTSRWNULYPe@|@gD@IfAsDDMd@aBDQ^oA@APk@^o@JOHKBCRMHC@?ZGZEpA]FA~@Uv@SLE`@MdAYb@M\\Kd@S`@Q`@Q`@Q`@Qb@QHCTQ@?PQHMHKLU@CHKTQJKRM@APEL?B?L?F@HD`@R`@R`@P`@R`@R`@PLHPH`@RZNDB`@VPLLJ^XJJPP\\`@\\^NPLJNLLF@?NDR?\\?D?b@@b@?b@@F?|ABT@dBNR@nBP^BJ@L@H@HAPATALCXEf@KzA_@b@OPGHGJM"
                     },
                     "start_location" : {
                        "lat" : 51.3059257,
                        "lng" : -2.7969286
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 617
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 51.2831205,
                        "lng" : -2.7844968
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eB3135\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}``xHt|_PHMHSDOVcAHUHU`@w@LY\\_APa@FOHKXe@f@{@`@m@X]Z]@A\\c@PYZk@b@w@PWX_@^c@ZYb@]d@UNKPOp@s@FGp@u@VYTQZK"
                     },
                     "start_location" : {
                        "lat" : 51.2873504,
                        "lng" : -2.7900278
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 475
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 51.2803531,
                        "lng" : -2.7804412
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eThe Barrows\u003c/b\u003e",
                     "polyline" : {
                        "points" : "of_xHbz~ONEPCl@?n@?j@ATCHAHENMLQFI^y@dBoDR_@Xo@HO@M@C?E?M?c@?S@{@?C?UBYD_@DQBG@EDEBAHGPEFAFEFG@EBE@E@I@G?GH_A"
                     },
                     "start_location" : {
                        "lat" : 51.2831205,
                        "lng" : -2.7844968
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 463
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 51.2793688,
                        "lng" : -2.774183400000001
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTweentown\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eB3135\u003c/b\u003e",
                     "polyline" : {
                        "points" : "eu~wHv`~O?m@Ai@A_@?Q@S@S@ODSH[^oA^_BNq@H[z@mDJq@DWBQ@WDo@@g@@W?eA?UAo@CaAEeADmA"
                     },
                     "start_location" : {
                        "lat" : 51.2803531,
                        "lng" : -2.7804412
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 217
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 42
                     },
                     "end_location" : {
                        "lat" : 51.2806114,
                        "lng" : -2.7720494
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e1st\u003c/b\u003e exit onto \u003cb\u003eCliff St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eB3135\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow B3135\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "ao~wHry|OEIAE@I@IQa@MQGMCGCS?QAYCWAMEYc@m@u@y@SUOMYYCCYQ"
                     },
                     "start_location" : {
                        "lat" : 51.2793688,
                        "lng" : -2.774183400000001
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "a}hxHhshPL}FFaBTcBLiCV{CFmACmAGuAQoBWiBi@eFkA}IWaESaGKeJEsBUsDGwI?cBDgDRaG^wFN_Bb@qCj@{BTqAHaA?}AO_Fc@eIc@cGG_C[iOIiHIiBu@cIW_CW}AOiAGoAGsCIsCWyFIoAIu@q@oDKy@?SF_@Ja@b@X\\Nb@NrBd@|Ch@`BXjAd@hClA|@d@xA`AbEjDxB~AdCpBj@ZZH`@D`@?b@?vAIr@EpA]\\OZWx@cAj@u@t@m@b@Sj@I^BLDNLTZR`@JZZvAP|@l@^tCjBbAf@HD~@DdAChA]bAK`@Bz@Xj@R`ARdBRdC?z@IfASzCsAl@MV?PCxAV~Df@xE`@|@Rx@l@pAfBz@|@~@v@dAp@`Aj@jAd@~@b@b@B\\Cp@WtCyBz@}@Zc@l@s@|BsAjA}@~@_Ax@g@hGmDbAk@`Ae@lC{@jA_@dCm@hB]nCg@XGNKvCuBvCyB^[b@m@^_A~@qDxBuH`@qAPk@^o@T[VQbAQpEiAxC{@bA_@bAc@fBu@^URQb@s@^]^YRGP?T@j@XfClAbBx@tAx@l@d@\\\\xA~A\\TPDzA@lDDbIn@~@I`AQ~Bo@ZOT[Nc@`@yAj@mAj@yAXq@b@q@hAiBt@{@^e@l@eAt@oAx@cA~@w@t@a@|BaCl@k@j@Q~@CzAA^EXST[dCiFl@oAJ]@{@@iBHy@HYFKLIXGNMH[@OH_A?m@CiA@e@Bc@No@~@oDXmAfA_FHi@FgAB_A?{AEqBEeADmAGOBS_@s@KUCe@MyAyAgBc@c@w@o@"
         },
         "summary" : "A368",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}

# Places JSON
