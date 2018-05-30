<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="morris.js in startbootstrap located at /templates/sb-admin-v2/js/plugins/morris">
  <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
<title>morris.js in startbootstrap | source code search engine</title>
<link href="/static/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
<link href="/static/style.css" rel="stylesheet" />
<link href="/static/jquery.nouislider.css" rel="stylesheet" />
<link rel="search" type="application/opensearchdescription+xml" title="searchcode" href="https://addons.mozilla.org/firefox/downloads/latest/570226/addon-570226-latest.xml">
<script src="/static/jquery-1.11.1.min.js"></script>
</head>
<body>

  <nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">
          <img height="24px" src="/static/searchcode_logo.png" />
        </a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="/about/">About</a></li>
          <li><a href="/api/">Developers</a></li>
          <li><a href="http://www.boyter.org/category/searchcode/">Updates</a></li>
          <li><a href="https://searchcodeserver.com/">searchcode server</a></li>
        </ul>
      </div>
  </nav>


  <div class="container">
  

    
    <div class="search-options">
      <form action="/">
        <div class="form-inline">
          <div class="form-group">
            <input autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck=
            "true" size="50" placeholder="Search Expression" type="search" class=
            "form-control" name="q" value="" />
          </div><input type="submit" value="search" class="btn btn-success" />
        </div>
      </form>
    </div>
    <div class="row">
      
      

      
      <script src="//m.servedby-buysellads.com/monetization.js" type="text/javascript"></script>
      <div id="ad_top"></div>
      <script>
      (function(){
        // format, zoneKey, segment:value, options
        _bsa.init('default', 'CVAIVKJU', 'placement:demo', {
          target: '#ad_top',
          align: 'horizontal',
          disable_css: 'true'
        });
      })();
      </script>

      <h4 class="codepath"><a href="https://github.com/EnginMicoogullari/startbootstrap.git">
            
            <img src="/static/icons/github-24-black.png">
             startbootstrap</a> /templates/sb-admin-v2/js/plugins/morris/morris.js
      </h4>

    <table class="table">
        <tbody>
          <tr>
            <td colspan="5">
              <div>
                <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=searchcodecom" id="_carbonads_js"></script>
                <style>#carbonads{margin: 0 auto;padding: 1em;max-width: 26em !important;border: solid 2px #428bca;border-radius: 3px;font-size: .9em;font-family: Verdana, sans-serif;line-height: 1.5;} #carbonads * {display: block;overflow: hidden;} .carbon-img{float: left; margin-right: 1em !important; margin-bottom: .5em;} .carbon-text{float: left;max-width: 12em; text-align: left;} .carbon-poweredby{margin-top: -1em;text-align: right;font-size: .9em !important;}</style>
              </div>
            </td>
          </tr>
          <tr>
            <td><span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span> Language</td>
            <td>Javascript</td>
            <td><span class="glyphicon glyphicon-wrench" aria-hidden="true"></span> Lines</td>
            <td>1889</td>
          </tr>
          <tr>
            <td><span class="glyphicon glyphicon-random" aria-hidden="true"></span> MD5 Hash</td>
            <td>713ce05e61134cd3d90cf6bd9b4337bb</td>
            
            <td></td>
            <td></td>
            
          </tr>
          <tr>
            <td><span class="glyphicon glyphicon-globe" aria-hidden="true"></span> Repository</td>
            <td>https://github.com/EnginMicoogullari/startbootstrap.git</td>
            <td><a href="/codesearch/raw/95495774" rel="nofollow"><span class="glyphicon glyphicon-align-left"></span> View Raw File</a></td>
            <td>
              <a href="/spdx/Github/EnginMicoogullari/startbootstrap/" rel="nofollow"><span class="glyphicon glyphicon-copyright-mark"></span> View Project SPDX</a> 
              </td>
          </tr>
          <tr>
            <td colspan="5"><a href="#" rel="nofollow" id="view-similar-link" class="hidden">
              <span class="glyphicon glyphicon-retweet"></span> <span id="similar-files" data-id="95495774">Find Similar Files</span></a> 
              <a href="#" rel="nofollow" id="file-tree-link" class="hidden">
                  <span class="glyphicon glyphicon-tree-conifer"></span> <span id="file-tree-button" data-id="12432682">View File Tree</span>
              </a>
              
              
              <a id="redirect_jsfiddle" href="" rel="nofollow" target="_blank"> | <span class="glyphicon glyphicon-edit"></span> Open JSFiddle</a>
              
            </td>
          </tr>
          <tr id="related-results">
            <td id="related-results-list" colspan="4"></td>
          </tr>
        </tbody>
    </table>

    <div class="row">
      <div class="col-md-4" id="file-tree">
        <div id="file-tree-list">
        </div>
      </div>
      <div class="col-md-8">
        <table class="highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre>   1
   2
   3
   4
   5
   6
   7
   8
   9
  10
  11
  12
  13
  14
  15
  16
  17
  18
  19
  20
  21
  22
  23
  24
  25
  26
  27
  28
  29
  30
  31
  32
  33
  34
  35
  36
  37
  38
  39
  40
  41
  42
  43
  44
  45
  46
  47
  48
  49
  50
  51
  52
  53
  54
  55
  56
  57
  58
  59
  60
  61
  62
  63
  64
  65
  66
  67
  68
  69
  70
  71
  72
  73
  74
  75
  76
  77
  78
  79
  80
  81
  82
  83
  84
  85
  86
  87
  88
  89
  90
  91
  92
  93
  94
  95
  96
  97
  98
  99
 100
 101
 102
 103
 104
 105
 106
 107
 108
 109
 110
 111
 112
 113
 114
 115
 116
 117
 118
 119
 120
 121
 122
 123
 124
 125
 126
 127
 128
 129
 130
 131
 132
 133
 134
 135
 136
 137
 138
 139
 140
 141
 142
 143
 144
 145
 146
 147
 148
 149
 150
 151
 152
 153
 154
 155
 156
 157
 158
 159
 160
 161
 162
 163
 164
 165
 166
 167
 168
 169
 170
 171
 172
 173
 174
 175
 176
 177
 178
 179
 180
 181
 182
 183
 184
 185
 186
 187
 188
 189
 190
 191
 192
 193
 194
 195
 196
 197
 198
 199
 200
 201
 202
 203
 204
 205
 206
 207
 208
 209
 210
 211
 212
 213
 214
 215
 216
 217
 218
 219
 220
 221
 222
 223
 224
 225
 226
 227
 228
 229
 230
 231
 232
 233
 234
 235
 236
 237
 238
 239
 240
 241
 242
 243
 244
 245
 246
 247
 248
 249
 250
 251
 252
 253
 254
 255
 256
 257
 258
 259
 260
 261
 262
 263
 264
 265
 266
 267
 268
 269
 270
 271
 272
 273
 274
 275
 276
 277
 278
 279
 280
 281
 282
 283
 284
 285
 286
 287
 288
 289
 290
 291
 292
 293
 294
 295
 296
 297
 298
 299
 300
 301
 302
 303
 304
 305
 306
 307
 308
 309
 310
 311
 312
 313
 314
 315
 316
 317
 318
 319
 320
 321
 322
 323
 324
 325
 326
 327
 328
 329
 330
 331
 332
 333
 334
 335
 336
 337
 338
 339
 340
 341
 342
 343
 344
 345
 346
 347
 348
 349
 350
 351
 352
 353
 354
 355
 356
 357
 358
 359
 360
 361
 362
 363
 364
 365
 366
 367
 368
 369
 370
 371
 372
 373
 374
 375
 376
 377
 378
 379
 380
 381
 382
 383
 384
 385
 386
 387
 388
 389
 390
 391
 392
 393
 394
 395
 396
 397
 398
 399
 400
 401
 402
 403
 404
 405
 406
 407
 408
 409
 410
 411
 412
 413
 414
 415
 416
 417
 418
 419
 420
 421
 422
 423
 424
 425
 426
 427
 428
 429
 430
 431
 432
 433
 434
 435
 436
 437
 438
 439
 440
 441
 442
 443
 444
 445
 446
 447
 448
 449
 450
 451
 452
 453
 454
 455
 456
 457
 458
 459
 460
 461
 462
 463
 464
 465
 466
 467
 468
 469
 470
 471
 472
 473
 474
 475
 476
 477
 478
 479
 480
 481
 482
 483
 484
 485
 486
 487
 488
 489
 490
 491
 492
 493
 494
 495
 496
 497
 498
 499
 500
 501
 502
 503
 504
 505
 506
 507
 508
 509
 510
 511
 512
 513
 514
 515
 516
 517
 518
 519
 520
 521
 522
 523
 524
 525
 526
 527
 528
 529
 530
 531
 532
 533
 534
 535
 536
 537
 538
 539
 540
 541
 542
 543
 544
 545
 546
 547
 548
 549
 550
 551
 552
 553
 554
 555
 556
 557
 558
 559
 560
 561
 562
 563
 564
 565
 566
 567
 568
 569
 570
 571
 572
 573
 574
 575
 576
 577
 578
 579
 580
 581
 582
 583
 584
 585
 586
 587
 588
 589
 590
 591
 592
 593
 594
 595
 596
 597
 598
 599
 600
 601
 602
 603
 604
 605
 606
 607
 608
 609
 610
 611
 612
 613
 614
 615
 616
 617
 618
 619
 620
 621
 622
 623
 624
 625
 626
 627
 628
 629
 630
 631
 632
 633
 634
 635
 636
 637
 638
 639
 640
 641
 642
 643
 644
 645
 646
 647
 648
 649
 650
 651
 652
 653
 654
 655
 656
 657
 658
 659
 660
 661
 662
 663
 664
 665
 666
 667
 668
 669
 670
 671
 672
 673
 674
 675
 676
 677
 678
 679
 680
 681
 682
 683
 684
 685
 686
 687
 688
 689
 690
 691
 692
 693
 694
 695
 696
 697
 698
 699
 700
 701
 702
 703
 704
 705
 706
 707
 708
 709
 710
 711
 712
 713
 714
 715
 716
 717
 718
 719
 720
 721
 722
 723
 724
 725
 726
 727
 728
 729
 730
 731
 732
 733
 734
 735
 736
 737
 738
 739
 740
 741
 742
 743
 744
 745
 746
 747
 748
 749
 750
 751
 752
 753
 754
 755
 756
 757
 758
 759
 760
 761
 762
 763
 764
 765
 766
 767
 768
 769
 770
 771
 772
 773
 774
 775
 776
 777
 778
 779
 780
 781
 782
 783
 784
 785
 786
 787
 788
 789
 790
 791
 792
 793
 794
 795
 796
 797
 798
 799
 800
 801
 802
 803
 804
 805
 806
 807
 808
 809
 810
 811
 812
 813
 814
 815
 816
 817
 818
 819
 820
 821
 822
 823
 824
 825
 826
 827
 828
 829
 830
 831
 832
 833
 834
 835
 836
 837
 838
 839
 840
 841
 842
 843
 844
 845
 846
 847
 848
 849
 850
 851
 852
 853
 854
 855
 856
 857
 858
 859
 860
 861
 862
 863
 864
 865
 866
 867
 868
 869
 870
 871
 872
 873
 874
 875
 876
 877
 878
 879
 880
 881
 882
 883
 884
 885
 886
 887
 888
 889
 890
 891
 892
 893
 894
 895
 896
 897
 898
 899
 900
 901
 902
 903
 904
 905
 906
 907
 908
 909
 910
 911
 912
 913
 914
 915
 916
 917
 918
 919
 920
 921
 922
 923
 924
 925
 926
 927
 928
 929
 930
 931
 932
 933
 934
 935
 936
 937
 938
 939
 940
 941
 942
 943
 944
 945
 946
 947
 948
 949
 950
 951
 952
 953
 954
 955
 956
 957
 958
 959
 960
 961
 962
 963
 964
 965
 966
 967
 968
 969
 970
 971
 972
 973
 974
 975
 976
 977
 978
 979
 980
 981
 982
 983
 984
 985
 986
 987
 988
 989
 990
 991
 992
 993
 994
 995
 996
 997
 998
 999
1000
1001
1002
1003
1004
1005
1006
1007
1008
1009
1010
1011
1012
1013
1014
1015
1016
1017
1018
1019
1020
1021
1022
1023
1024
1025
1026
1027
1028
1029
1030
1031
1032
1033
1034
1035
1036
1037
1038
1039
1040
1041
1042
1043
1044
1045
1046
1047
1048
1049
1050
1051
1052
1053
1054
1055
1056
1057
1058
1059
1060
1061
1062
1063
1064
1065
1066
1067
1068
1069
1070
1071
1072
1073
1074
1075
1076
1077
1078
1079
1080
1081
1082
1083
1084
1085
1086
1087
1088
1089
1090
1091
1092
1093
1094
1095
1096
1097
1098
1099
1100
1101
1102
1103
1104
1105
1106
1107
1108
1109
1110
1111
1112
1113
1114
1115
1116
1117
1118
1119
1120
1121
1122
1123
1124
1125
1126
1127
1128
1129
1130
1131
1132
1133
1134
1135
1136
1137
1138
1139
1140
1141
1142
1143
1144
1145
1146
1147
1148
1149
1150
1151
1152
1153
1154
1155
1156
1157
1158
1159
1160
1161
1162
1163
1164
1165
1166
1167
1168
1169
1170
1171
1172
1173
1174
1175
1176
1177
1178
1179
1180
1181
1182
1183
1184
1185
1186
1187
1188
1189
1190
1191
1192
1193
1194
1195
1196
1197
1198
1199
1200
1201
1202
1203
1204
1205
1206
1207
1208
1209
1210
1211
1212
1213
1214
1215
1216
1217
1218
1219
1220
1221
1222
1223
1224
1225
1226
1227
1228
1229
1230
1231
1232
1233
1234
1235
1236
1237
1238
1239
1240
1241
1242
1243
1244
1245
1246
1247
1248
1249
1250
1251
1252
1253
1254
1255
1256
1257
1258
1259
1260
1261
1262
1263
1264
1265
1266
1267
1268
1269
1270
1271
1272
1273
1274
1275
1276
1277
1278
1279
1280
1281
1282
1283
1284
1285
1286
1287
1288
1289
1290
1291
1292
1293
1294
1295
1296
1297
1298
1299
1300
1301
1302
1303
1304
1305
1306
1307
1308
1309
1310
1311
1312
1313
1314
1315
1316
1317
1318
1319
1320
1321
1322
1323
1324
1325
1326
1327
1328
1329
1330
1331
1332
1333
1334
1335
1336
1337
1338
1339
1340
1341
1342
1343
1344
1345
1346
1347
1348
1349
1350
1351
1352
1353
1354
1355
1356
1357
1358
1359
1360
1361
1362
1363
1364
1365
1366
1367
1368
1369
1370
1371
1372
1373
1374
1375
1376
1377
1378
1379
1380
1381
1382
1383
1384
1385
1386
1387
1388
1389
1390
1391
1392
1393
1394
1395
1396
1397
1398
1399
1400
1401
1402
1403
1404
1405
1406
1407
1408
1409
1410
1411
1412
1413
1414
1415
1416
1417
1418
1419
1420
1421
1422
1423
1424
1425
1426
1427
1428
1429
1430
1431
1432
1433
1434
1435
1436
1437
1438
1439
1440
1441
1442
1443
1444
1445
1446
1447
1448
1449
1450
1451
1452
1453
1454
1455
1456
1457
1458
1459
1460
1461
1462
1463
1464
1465
1466
1467
1468
1469
1470
1471
1472
1473
1474
1475
1476
1477
1478
1479
1480
1481
1482
1483
1484
1485
1486
1487
1488
1489
1490
1491
1492
1493
1494
1495
1496
1497
1498
1499
1500
1501
1502
1503
1504
1505
1506
1507
1508
1509
1510
1511
1512
1513
1514
1515
1516
1517
1518
1519
1520
1521
1522
1523
1524
1525
1526
1527
1528
1529
1530
1531
1532
1533
1534
1535
1536
1537
1538
1539
1540
1541
1542
1543
1544
1545
1546
1547
1548
1549
1550
1551
1552
1553
1554
1555
1556
1557
1558
1559
1560
1561
1562
1563
1564
1565
1566
1567
1568
1569
1570
1571
1572
1573
1574
1575
1576
1577
1578
1579
1580
1581
1582
1583
1584
1585
1586
1587
1588
1589
1590
1591
1592
1593
1594
1595
1596
1597
1598
1599
1600
1601
1602
1603
1604
1605
1606
1607
1608
1609
1610
1611
1612
1613
1614
1615
1616
1617
1618
1619
1620
1621
1622
1623
1624
1625
1626
1627
1628
1629
1630
1631
1632
1633
1634
1635
1636
1637
1638
1639
1640
1641
1642
1643
1644
1645
1646
1647
1648
1649
1650
1651
1652
1653
1654
1655
1656
1657
1658
1659
1660
1661
1662
1663
1664
1665
1666
1667
1668
1669
1670
1671
1672
1673
1674
1675
1676
1677
1678
1679
1680
1681
1682
1683
1684
1685
1686
1687
1688
1689
1690
1691
1692
1693
1694
1695
1696
1697
1698
1699
1700
1701
1702
1703
1704
1705
1706
1707
1708
1709
1710
1711
1712
1713
1714
1715
1716
1717
1718
1719
1720
1721
1722
1723
1724
1725
1726
1727
1728
1729
1730
1731
1732
1733
1734
1735
1736
1737
1738
1739
1740
1741
1742
1743
1744
1745
1746
1747
1748
1749
1750
1751
1752
1753
1754
1755
1756
1757
1758
1759
1760
1761
1762
1763
1764
1765
1766
1767
1768
1769
1770
1771
1772
1773
1774
1775
1776
1777
1778
1779
1780
1781
1782
1783
1784
1785
1786
1787
1788
1789
1790
1791
1792
1793
1794
1795
1796
1797
1798
1799
1800
1801
1802
1803
1804
1805
1806
1807
1808
1809
1810
1811
1812
1813
1814
1815
1816
1817
1818
1819
1820
1821
1822
1823
1824
1825
1826
1827
1828
1829
1830
1831
1832
1833
1834
1835
1836
1837
1838
1839
1840
1841
1842
1843
1844
1845
1846
1847
1848
1849
1850
1851
1852
1853
1854
1855
1856
1857
1858
1859
1860
1861
1862
1863
1864
1865
1866
1867
1868
1869
1870
1871
1872
1873
1874
1875
1876
1877
1878
1879
1880
1881
1882
1883
1884
1885
1886
1887
1888</pre></div></td><td class="code"><div class="highlight"><pre><span></span><a name="l-1"></a><span class="o">(</span><span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-2"></a>  <span class="n">var</span> <span class="err">$</span><span class="o">,</span> <span class="n">Morris</span><span class="o">,</span> <span class="n">minutesSpecHelper</span><span class="o">,</span> <span class="n">secondsSpecHelper</span><span class="o">,</span>
<a name="l-3"></a>    <span class="n">__slice</span> <span class="o">=</span> <span class="cp">[]</span><span class="o">.</span><span class="n">slice</span><span class="o">,</span>
<a name="l-4"></a>    <span class="n">__bind</span> <span class="o">=</span> <span class="n">function</span><span class="p">(</span><span class="n">fn</span><span class="o">,</span> <span class="n">me</span><span class="p">)</span><span class="err">{</span> <span class="n">return</span> <span class="n">function</span><span class="p">()</span><span class="err">{</span> <span class="n">return</span> <span class="n">fn</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">me</span><span class="o">,</span> <span class="n">arguments</span><span class="p">);</span> <span class="p">}</span><span class="o">;</span> <span class="err">}</span><span class="o">,</span>
<a name="l-5"></a>    <span class="nt">__hasProp</span> <span class="o">=</span> <span class="p">{}</span><span class="nc">.hasOwnProperty</span><span class="o">,</span>
<a name="l-6"></a>    <span class="nt">__extends</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">child</span><span class="o">,</span> <span class="nt">parent</span><span class="o">)</span> <span class="p">{</span> <span class="n">for</span> <span class="p">(</span><span class="n">var</span> <span class="n">key</span> <span class="n">in</span> <span class="n">parent</span><span class="p">)</span> <span class="err">{</span> <span class="n">if</span> <span class="p">(</span><span class="n">__hasProp</span><span class="o">.</span><span class="n">call</span><span class="p">(</span><span class="n">parent</span><span class="o">,</span> <span class="n">key</span><span class="p">))</span> <span class="n">child</span><span class="cp">[</span><span class="nx">key</span><span class="cp">]</span> <span class="o">=</span> <span class="n">parent</span><span class="cp">[</span><span class="nx">key</span><span class="cp">]</span><span class="p">;</span> <span class="p">}</span> <span class="nt">function</span> <span class="nt">ctor</span><span class="o">()</span> <span class="p">{</span> <span class="n">this</span><span class="o">.</span><span class="n">constructor</span> <span class="o">=</span> <span class="n">child</span><span class="p">;</span> <span class="p">}</span> <span class="nt">ctor</span><span class="nc">.prototype</span> <span class="o">=</span> <span class="nt">parent</span><span class="nc">.prototype</span><span class="o">;</span> <span class="nt">child</span><span class="nc">.prototype</span> <span class="o">=</span> <span class="nt">new</span> <span class="nt">ctor</span><span class="o">();</span> <span class="nt">child</span><span class="nc">.__super__</span> <span class="o">=</span> <span class="nt">parent</span><span class="nc">.prototype</span><span class="o">;</span> <span class="nt">return</span> <span class="nt">child</span><span class="o">;</span> <span class="err">}</span><span class="o">,</span>
<a name="l-7"></a>    <span class="nt">__indexOf</span> <span class="o">=</span> <span class="cp">[]</span><span class="nc">.indexOf</span> <span class="o">||</span> <span class="nt">function</span><span class="o">(</span><span class="nt">item</span><span class="o">)</span> <span class="p">{</span> <span class="n">for</span> <span class="p">(</span><span class="n">var</span> <span class="n">i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">l</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="n">l</span><span class="p">;</span> <span class="n">i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span> <span class="n">if</span> <span class="p">(</span><span class="n">i</span> <span class="n">in</span> <span class="n">this</span> <span class="o">&amp;&amp;</span> <span class="n">this</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span> <span class="o">===</span> <span class="n">item</span><span class="p">)</span> <span class="n">return</span> <span class="n">i</span><span class="p">;</span> <span class="p">}</span> <span class="nt">return</span> <span class="nt">-1</span><span class="o">;</span> <span class="err">}</span><span class="o">;</span>
<a name="l-8"></a>
<a name="l-9"></a>  <span class="nt">Morris</span> <span class="o">=</span> <span class="nt">window</span><span class="nc">.Morris</span> <span class="o">=</span> <span class="p">{}</span><span class="o">;</span>
<a name="l-10"></a>
<a name="l-11"></a>  <span class="o">$</span> <span class="o">=</span> <span class="nt">jQuery</span><span class="o">;</span>
<a name="l-12"></a>
<a name="l-13"></a>  <span class="nt">Morris</span><span class="nc">.EventEmitter</span> <span class="o">=</span> <span class="o">(</span><span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-14"></a>    <span class="n">function</span> <span class="n">EventEmitter</span><span class="p">()</span> <span class="err">{</span><span class="p">}</span>
<a name="l-15"></a>
<a name="l-16"></a>    <span class="nt">EventEmitter</span><span class="nc">.prototype.on</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">name</span><span class="o">,</span> <span class="nt">handler</span><span class="o">)</span> <span class="p">{</span>
<a name="l-17"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">handlers</span> <span class="o">==</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-18"></a>        <span class="n">this</span><span class="o">.</span><span class="n">handlers</span> <span class="o">=</span> <span class="err">{</span><span class="p">}</span><span class="o">;</span>
<a name="l-19"></a>      <span class="err">}</span>
<a name="l-20"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.handlers</span><span class="cp">[</span><span class="nx">name</span><span class="cp">]</span> <span class="o">==</span> <span class="nt">null</span><span class="o">)</span> <span class="p">{</span>
<a name="l-21"></a>        <span class="n">this</span><span class="o">.</span><span class="n">handlers</span><span class="cp">[</span><span class="nx">name</span><span class="cp">]</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-22"></a>      <span class="p">}</span>
<a name="l-23"></a>      <span class="nt">this</span><span class="nc">.handlers</span><span class="cp">[</span><span class="nx">name</span><span class="cp">]</span><span class="nc">.push</span><span class="o">(</span><span class="nt">handler</span><span class="o">);</span>
<a name="l-24"></a>      <span class="nt">return</span> <span class="nt">this</span><span class="o">;</span>
<a name="l-25"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-26"></a>
<a name="l-27"></a>    <span class="nt">EventEmitter</span><span class="nc">.prototype.fire</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-28"></a>      <span class="n">var</span> <span class="n">args</span><span class="o">,</span> <span class="n">handler</span><span class="o">,</span> <span class="n">name</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-29"></a>      <span class="n">name</span> <span class="o">=</span> <span class="n">arguments</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="o">,</span> <span class="n">args</span> <span class="o">=</span> <span class="m">2</span> <span class="o">&lt;=</span> <span class="n">arguments</span><span class="o">.</span><span class="n">length</span> <span class="o">?</span> <span class="n">__slice</span><span class="o">.</span><span class="n">call</span><span class="p">(</span><span class="n">arguments</span><span class="o">,</span> <span class="m">1</span><span class="p">)</span> <span class="o">:</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-30"></a>      <span class="n">if</span> <span class="p">((</span><span class="n">this</span><span class="o">.</span><span class="n">handlers</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">handlers</span><span class="cp">[</span><span class="nx">name</span><span class="cp">]</span> <span class="o">!=</span> <span class="n">null</span><span class="p">))</span> <span class="err">{</span>
<a name="l-31"></a>        <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">handlers</span><span class="cp">[</span><span class="nx">name</span><span class="cp">]</span><span class="p">;</span>
<a name="l-32"></a>        <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-33"></a>        <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-34"></a>          <span class="n">handler</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-35"></a>          <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">handler</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">null</span><span class="o">,</span> <span class="n">args</span><span class="p">));</span>
<a name="l-36"></a>        <span class="p">}</span>
<a name="l-37"></a>        <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-38"></a>      <span class="err">}</span>
<a name="l-39"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-40"></a>
<a name="l-41"></a>    <span class="nt">return</span> <span class="nt">EventEmitter</span><span class="o">;</span>
<a name="l-42"></a>
<a name="l-43"></a>  <span class="err">}</span><span class="o">)();</span>
<a name="l-44"></a>
<a name="l-45"></a>  <span class="nt">Morris</span><span class="nc">.commas</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">num</span><span class="o">)</span> <span class="p">{</span>
<a name="l-46"></a>    <span class="n">var</span> <span class="n">absnum</span><span class="o">,</span> <span class="n">intnum</span><span class="o">,</span> <span class="n">ret</span><span class="o">,</span> <span class="n">strabsnum</span><span class="p">;</span>
<a name="l-47"></a>    <span class="n">if</span> <span class="p">(</span><span class="n">num</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-48"></a>      <span class="n">ret</span> <span class="o">=</span> <span class="n">num</span> <span class="o">&lt;</span> <span class="m">0</span> <span class="o">?</span> <span class="s2">&quot;-&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
<a name="l-49"></a>      <span class="n">absnum</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">abs</span><span class="p">(</span><span class="n">num</span><span class="p">);</span>
<a name="l-50"></a>      <span class="n">intnum</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">floor</span><span class="p">(</span><span class="n">absnum</span><span class="p">)</span><span class="o">.</span><span class="n">toFixed</span><span class="p">(</span><span class="m">0</span><span class="p">);</span>
<a name="l-51"></a>      <span class="n">ret</span> <span class="o">+=</span> <span class="n">intnum</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="o">/</span><span class="p">(</span><span class="o">?=</span><span class="p">(</span><span class="o">?:</span><span class="err">\</span><span class="n">d</span><span class="err">{</span><span class="m">3</span><span class="p">}</span><span class="o">)+$)(?!^)/</span><span class="nt">g</span><span class="o">,</span> <span class="s1">&#39;,&#39;</span><span class="o">);</span>
<a name="l-52"></a>      <span class="nt">strabsnum</span> <span class="o">=</span> <span class="nt">absnum</span><span class="nc">.toString</span><span class="o">();</span>
<a name="l-53"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">strabsnum</span><span class="nc">.length</span> <span class="o">&gt;</span> <span class="nt">intnum</span><span class="nc">.length</span><span class="o">)</span> <span class="p">{</span>
<a name="l-54"></a>        <span class="n">ret</span> <span class="o">+=</span> <span class="n">strabsnum</span><span class="o">.</span><span class="n">slice</span><span class="p">(</span><span class="n">intnum</span><span class="o">.</span><span class="n">length</span><span class="p">);</span>
<a name="l-55"></a>      <span class="p">}</span>
<a name="l-56"></a>      <span class="nt">return</span> <span class="nt">ret</span><span class="o">;</span>
<a name="l-57"></a>    <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-58"></a>      <span class="n">return</span> <span class="s1">&#39;-&#39;</span><span class="p">;</span>
<a name="l-59"></a>    <span class="p">}</span>
<a name="l-60"></a>  <span class="err">}</span><span class="o">;</span>
<a name="l-61"></a>
<a name="l-62"></a>  <span class="nt">Morris</span><span class="nc">.pad2</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">number</span><span class="o">)</span> <span class="p">{</span>
<a name="l-63"></a>    <span class="n">return</span> <span class="p">(</span><span class="n">number</span> <span class="o">&lt;</span> <span class="m">10</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="n">number</span><span class="p">;</span>
<a name="l-64"></a>  <span class="p">}</span><span class="o">;</span>
<a name="l-65"></a>
<a name="l-66"></a>  <span class="nt">Morris</span><span class="nc">.Grid</span> <span class="o">=</span> <span class="o">(</span><span class="nt">function</span><span class="o">(</span><span class="nt">_super</span><span class="o">)</span> <span class="p">{</span>
<a name="l-67"></a>    <span class="n">__extends</span><span class="p">(</span><span class="n">Grid</span><span class="o">,</span> <span class="n">_super</span><span class="p">);</span>
<a name="l-68"></a>
<a name="l-69"></a>    <span class="n">function</span> <span class="n">Grid</span><span class="p">(</span><span class="n">options</span><span class="p">)</span> <span class="err">{</span>
<a name="l-70"></a>      <span class="n">this</span><span class="o">.</span><span class="n">resizeHandler</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">resizeHandler</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-71"></a>      <span class="n">var</span> <span class="n">_this</span> <span class="o">=</span> <span class="n">this</span><span class="p">;</span>
<a name="l-72"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">typeof</span> <span class="n">options</span><span class="o">.</span><span class="n">element</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-73"></a>        <span class="n">this</span><span class="o">.</span><span class="n">el</span> <span class="o">=</span> <span class="err">$</span><span class="p">(</span><span class="n">document</span><span class="o">.</span><span class="n">getElementById</span><span class="p">(</span><span class="n">options</span><span class="o">.</span><span class="n">element</span><span class="p">));</span>
<a name="l-74"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-75"></a>        <span class="n">this</span><span class="o">.</span><span class="n">el</span> <span class="o">=</span> <span class="err">$</span><span class="p">(</span><span class="n">options</span><span class="o">.</span><span class="n">element</span><span class="p">);</span>
<a name="l-76"></a>      <span class="p">}</span>
<a name="l-77"></a>      <span class="nt">if</span> <span class="o">((</span><span class="nt">this</span><span class="nc">.el</span> <span class="o">==</span> <span class="nt">null</span><span class="o">)</span> <span class="o">||</span> <span class="nt">this</span><span class="nc">.el.length</span> <span class="o">===</span> <span class="nt">0</span><span class="o">)</span> <span class="p">{</span>
<a name="l-78"></a>        <span class="n">throw</span> <span class="n">new</span> <span class="n">Error</span><span class="p">(</span><span class="s2">&quot;Graph container element not found&quot;</span><span class="p">);</span>
<a name="l-79"></a>      <span class="p">}</span>
<a name="l-80"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.el.css</span><span class="o">(</span><span class="s1">&#39;position&#39;</span><span class="o">)</span> <span class="o">===</span> <span class="s1">&#39;static&#39;</span><span class="o">)</span> <span class="p">{</span>
<a name="l-81"></a>        <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="n">css</span><span class="p">(</span><span class="s1">&#39;position&#39;</span><span class="o">,</span> <span class="s1">&#39;relative&#39;</span><span class="p">);</span>
<a name="l-82"></a>      <span class="p">}</span>
<a name="l-83"></a>      <span class="nt">this</span><span class="nc">.options</span> <span class="o">=</span> <span class="o">$</span><span class="nc">.extend</span><span class="o">(</span><span class="p">{}</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.gridDefaults</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.defaults</span> <span class="o">||</span> <span class="p">{}</span><span class="o">,</span> <span class="nt">options</span><span class="o">);</span>
<a name="l-84"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">typeof</span> <span class="nt">this</span><span class="nc">.options.units</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="o">)</span> <span class="p">{</span>
<a name="l-85"></a>        <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">postUnits</span> <span class="o">=</span> <span class="n">options</span><span class="o">.</span><span class="n">units</span><span class="p">;</span>
<a name="l-86"></a>      <span class="p">}</span>
<a name="l-87"></a>      <span class="nt">this</span><span class="nc">.raphael</span> <span class="o">=</span> <span class="nt">new</span> <span class="nt">Raphael</span><span class="o">(</span><span class="nt">this</span><span class="nc">.el</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="o">);</span>
<a name="l-88"></a>      <span class="nt">this</span><span class="nc">.elementWidth</span> <span class="o">=</span> <span class="nt">null</span><span class="o">;</span>
<a name="l-89"></a>      <span class="nt">this</span><span class="nc">.elementHeight</span> <span class="o">=</span> <span class="nt">null</span><span class="o">;</span>
<a name="l-90"></a>      <span class="nt">this</span><span class="nc">.dirty</span> <span class="o">=</span> <span class="nt">false</span><span class="o">;</span>
<a name="l-91"></a>      <span class="nt">this</span><span class="nc">.selectFrom</span> <span class="o">=</span> <span class="nt">null</span><span class="o">;</span>
<a name="l-92"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.init</span><span class="o">)</span> <span class="p">{</span>
<a name="l-93"></a>        <span class="n">this</span><span class="o">.</span><span class="n">init</span><span class="p">();</span>
<a name="l-94"></a>      <span class="p">}</span>
<a name="l-95"></a>      <span class="nt">this</span><span class="nc">.setData</span><span class="o">(</span><span class="nt">this</span><span class="nc">.options.data</span><span class="o">);</span>
<a name="l-96"></a>      <span class="nt">this</span><span class="nc">.el.bind</span><span class="o">(</span><span class="s1">&#39;mousemove&#39;</span><span class="o">,</span> <span class="nt">function</span><span class="o">(</span><span class="nt">evt</span><span class="o">)</span> <span class="p">{</span>
<a name="l-97"></a>        <span class="n">var</span> <span class="nb">left</span><span class="o">,</span> <span class="n">offset</span><span class="o">,</span> <span class="nb">right</span><span class="o">,</span> <span class="nb">width</span><span class="o">,</span> <span class="n">x</span><span class="p">;</span>
<a name="l-98"></a>        <span class="n">offset</span> <span class="o">=</span> <span class="n">_this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="n">offset</span><span class="p">();</span>
<a name="l-99"></a>        <span class="n">x</span> <span class="o">=</span> <span class="n">evt</span><span class="o">.</span><span class="n">pageX</span> <span class="o">-</span> <span class="n">offset</span><span class="o">.</span><span class="nb">left</span><span class="p">;</span>
<a name="l-100"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">selectFrom</span><span class="p">)</span> <span class="err">{</span>
<a name="l-101"></a>          <span class="nb">left</span> <span class="o">=</span> <span class="n">_this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">_this.hitTest</span><span class="p">(</span><span class="nx">Math.min</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">_this.selectFrom</span><span class="p">))</span><span class="cp">]</span><span class="o">.</span><span class="n">_x</span><span class="p">;</span>
<a name="l-102"></a>          <span class="nb">right</span> <span class="o">=</span> <span class="n">_this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">_this.hitTest</span><span class="p">(</span><span class="nx">Math.max</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">_this.selectFrom</span><span class="p">))</span><span class="cp">]</span><span class="o">.</span><span class="n">_x</span><span class="p">;</span>
<a name="l-103"></a>          <span class="nb">width</span> <span class="o">=</span> <span class="nb">right</span> <span class="o">-</span> <span class="nb">left</span><span class="p">;</span>
<a name="l-104"></a>          <span class="n">return</span> <span class="n">_this</span><span class="o">.</span><span class="n">selectionRect</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="err">{</span>
<a name="l-105"></a>            <span class="n">x</span><span class="o">:</span> <span class="nb">left</span><span class="o">,</span>
<a name="l-106"></a>            <span class="nb">width</span><span class="o">:</span> <span class="nb">width</span>
<a name="l-107"></a>          <span class="p">}</span><span class="o">);</span>
<a name="l-108"></a>        <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-109"></a>          <span class="n">return</span> <span class="n">_this</span><span class="o">.</span><span class="n">fire</span><span class="p">(</span><span class="s1">&#39;hovermove&#39;</span><span class="o">,</span> <span class="n">x</span><span class="o">,</span> <span class="n">evt</span><span class="o">.</span><span class="n">pageY</span> <span class="o">-</span> <span class="n">offset</span><span class="o">.</span><span class="nb">top</span><span class="p">);</span>
<a name="l-110"></a>        <span class="p">}</span>
<a name="l-111"></a>      <span class="err">}</span><span class="o">);</span>
<a name="l-112"></a>      <span class="nt">this</span><span class="nc">.el.bind</span><span class="o">(</span><span class="s1">&#39;mouseleave&#39;</span><span class="o">,</span> <span class="nt">function</span><span class="o">(</span><span class="nt">evt</span><span class="o">)</span> <span class="p">{</span>
<a name="l-113"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">selectFrom</span><span class="p">)</span> <span class="err">{</span>
<a name="l-114"></a>          <span class="n">_this</span><span class="o">.</span><span class="n">selectionRect</span><span class="o">.</span><span class="nb">hide</span><span class="p">();</span>
<a name="l-115"></a>          <span class="n">_this</span><span class="o">.</span><span class="n">selectFrom</span> <span class="o">=</span> <span class="n">null</span><span class="p">;</span>
<a name="l-116"></a>        <span class="p">}</span>
<a name="l-117"></a>        <span class="nt">return</span> <span class="nt">_this</span><span class="nc">.fire</span><span class="o">(</span><span class="s1">&#39;hoverout&#39;</span><span class="o">);</span>
<a name="l-118"></a>      <span class="err">}</span><span class="o">);</span>
<a name="l-119"></a>      <span class="nt">this</span><span class="nc">.el.bind</span><span class="o">(</span><span class="s1">&#39;touchstart touchmove touchend&#39;</span><span class="o">,</span> <span class="nt">function</span><span class="o">(</span><span class="nt">evt</span><span class="o">)</span> <span class="p">{</span>
<a name="l-120"></a>        <span class="n">var</span> <span class="n">offset</span><span class="o">,</span> <span class="n">touch</span><span class="p">;</span>
<a name="l-121"></a>        <span class="n">touch</span> <span class="o">=</span> <span class="n">evt</span><span class="o">.</span><span class="n">originalEvent</span><span class="o">.</span><span class="n">touches</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span> <span class="o">||</span> <span class="n">evt</span><span class="o">.</span><span class="n">originalEvent</span><span class="o">.</span><span class="n">changedTouches</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="p">;</span>
<a name="l-122"></a>        <span class="n">offset</span> <span class="o">=</span> <span class="n">_this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="n">offset</span><span class="p">();</span>
<a name="l-123"></a>        <span class="n">_this</span><span class="o">.</span><span class="n">fire</span><span class="p">(</span><span class="s1">&#39;hover&#39;</span><span class="o">,</span> <span class="n">touch</span><span class="o">.</span><span class="n">pageX</span> <span class="o">-</span> <span class="n">offset</span><span class="o">.</span><span class="nb">left</span><span class="o">,</span> <span class="n">touch</span><span class="o">.</span><span class="n">pageY</span> <span class="o">-</span> <span class="n">offset</span><span class="o">.</span><span class="nb">top</span><span class="p">);</span>
<a name="l-124"></a>        <span class="n">return</span> <span class="n">touch</span><span class="p">;</span>
<a name="l-125"></a>      <span class="p">}</span><span class="o">);</span>
<a name="l-126"></a>      <span class="nt">this</span><span class="nc">.el.bind</span><span class="o">(</span><span class="s1">&#39;click&#39;</span><span class="o">,</span> <span class="nt">function</span><span class="o">(</span><span class="nt">evt</span><span class="o">)</span> <span class="p">{</span>
<a name="l-127"></a>        <span class="n">var</span> <span class="n">offset</span><span class="p">;</span>
<a name="l-128"></a>        <span class="n">offset</span> <span class="o">=</span> <span class="n">_this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="n">offset</span><span class="p">();</span>
<a name="l-129"></a>        <span class="n">return</span> <span class="n">_this</span><span class="o">.</span><span class="n">fire</span><span class="p">(</span><span class="s1">&#39;gridclick&#39;</span><span class="o">,</span> <span class="n">evt</span><span class="o">.</span><span class="n">pageX</span> <span class="o">-</span> <span class="n">offset</span><span class="o">.</span><span class="nb">left</span><span class="o">,</span> <span class="n">evt</span><span class="o">.</span><span class="n">pageY</span> <span class="o">-</span> <span class="n">offset</span><span class="o">.</span><span class="nb">top</span><span class="p">);</span>
<a name="l-130"></a>      <span class="p">}</span><span class="o">);</span>
<a name="l-131"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.rangeSelect</span><span class="o">)</span> <span class="p">{</span>
<a name="l-132"></a>        <span class="n">this</span><span class="o">.</span><span class="n">selectionRect</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">rect</span><span class="p">(</span><span class="m">0</span><span class="o">,</span> <span class="m">0</span><span class="o">,</span> <span class="m">0</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="n">innerHeight</span><span class="p">())</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="err">{</span>
<a name="l-133"></a>          <span class="n">fill</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">rangeSelectColor</span><span class="o">,</span>
<a name="l-134"></a>          <span class="n">stroke</span><span class="o">:</span> <span class="n">false</span>
<a name="l-135"></a>        <span class="p">}</span><span class="o">)</span><span class="nc">.toBack</span><span class="o">()</span><span class="nc">.hide</span><span class="o">();</span>
<a name="l-136"></a>        <span class="nt">this</span><span class="nc">.el.bind</span><span class="o">(</span><span class="s1">&#39;mousedown&#39;</span><span class="o">,</span> <span class="nt">function</span><span class="o">(</span><span class="nt">evt</span><span class="o">)</span> <span class="p">{</span>
<a name="l-137"></a>          <span class="n">var</span> <span class="n">offset</span><span class="p">;</span>
<a name="l-138"></a>          <span class="n">offset</span> <span class="o">=</span> <span class="n">_this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="n">offset</span><span class="p">();</span>
<a name="l-139"></a>          <span class="n">return</span> <span class="n">_this</span><span class="o">.</span><span class="n">startRange</span><span class="p">(</span><span class="n">evt</span><span class="o">.</span><span class="n">pageX</span> <span class="o">-</span> <span class="n">offset</span><span class="o">.</span><span class="nb">left</span><span class="p">);</span>
<a name="l-140"></a>        <span class="p">}</span><span class="o">);</span>
<a name="l-141"></a>        <span class="nt">this</span><span class="nc">.el.bind</span><span class="o">(</span><span class="s1">&#39;mouseup&#39;</span><span class="o">,</span> <span class="nt">function</span><span class="o">(</span><span class="nt">evt</span><span class="o">)</span> <span class="p">{</span>
<a name="l-142"></a>          <span class="n">var</span> <span class="n">offset</span><span class="p">;</span>
<a name="l-143"></a>          <span class="n">offset</span> <span class="o">=</span> <span class="n">_this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="n">offset</span><span class="p">();</span>
<a name="l-144"></a>          <span class="n">_this</span><span class="o">.</span><span class="n">endRange</span><span class="p">(</span><span class="n">evt</span><span class="o">.</span><span class="n">pageX</span> <span class="o">-</span> <span class="n">offset</span><span class="o">.</span><span class="nb">left</span><span class="p">);</span>
<a name="l-145"></a>          <span class="n">return</span> <span class="n">_this</span><span class="o">.</span><span class="n">fire</span><span class="p">(</span><span class="s1">&#39;hovermove&#39;</span><span class="o">,</span> <span class="n">evt</span><span class="o">.</span><span class="n">pageX</span> <span class="o">-</span> <span class="n">offset</span><span class="o">.</span><span class="nb">left</span><span class="o">,</span> <span class="n">evt</span><span class="o">.</span><span class="n">pageY</span> <span class="o">-</span> <span class="n">offset</span><span class="o">.</span><span class="nb">top</span><span class="p">);</span>
<a name="l-146"></a>        <span class="p">}</span><span class="o">);</span>
<a name="l-147"></a>      <span class="err">}</span>
<a name="l-148"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.resize</span><span class="o">)</span> <span class="p">{</span>
<a name="l-149"></a>        <span class="err">$</span><span class="p">(</span><span class="n">window</span><span class="p">)</span><span class="o">.</span><span class="n">bind</span><span class="p">(</span><span class="s1">&#39;resize&#39;</span><span class="o">,</span> <span class="n">function</span><span class="p">(</span><span class="n">evt</span><span class="p">)</span> <span class="err">{</span>
<a name="l-150"></a>          <span class="n">if</span> <span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">timeoutId</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-151"></a>            <span class="n">window</span><span class="o">.</span><span class="n">clearTimeout</span><span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">timeoutId</span><span class="p">);</span>
<a name="l-152"></a>          <span class="p">}</span>
<a name="l-153"></a>          <span class="nt">return</span> <span class="nt">_this</span><span class="nc">.timeoutId</span> <span class="o">=</span> <span class="nt">window</span><span class="nc">.setTimeout</span><span class="o">(</span><span class="nt">_this</span><span class="nc">.resizeHandler</span><span class="o">,</span> <span class="nt">100</span><span class="o">);</span>
<a name="l-154"></a>        <span class="err">}</span><span class="o">);</span>
<a name="l-155"></a>      <span class="err">}</span>
<a name="l-156"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.postInit</span><span class="o">)</span> <span class="p">{</span>
<a name="l-157"></a>        <span class="n">this</span><span class="o">.</span><span class="n">postInit</span><span class="p">();</span>
<a name="l-158"></a>      <span class="p">}</span>
<a name="l-159"></a>    <span class="err">}</span>
<a name="l-160"></a>
<a name="l-161"></a>    <span class="nt">Grid</span><span class="nc">.prototype.gridDefaults</span> <span class="o">=</span> <span class="p">{</span>
<a name="l-162"></a>      <span class="n">dateFormat</span><span class="o">:</span> <span class="n">null</span><span class="o">,</span>
<a name="l-163"></a>      <span class="n">axes</span><span class="o">:</span> <span class="n">true</span><span class="o">,</span>
<a name="l-164"></a>      <span class="n">grid</span><span class="o">:</span> <span class="n">true</span><span class="o">,</span>
<a name="l-165"></a>      <span class="n">gridLineColor</span><span class="o">:</span> <span class="s1">&#39;#aaa&#39;</span><span class="o">,</span>
<a name="l-166"></a>      <span class="n">gridStrokeWidth</span><span class="o">:</span> <span class="m">0</span><span class="o">.</span><span class="m">5</span><span class="o">,</span>
<a name="l-167"></a>      <span class="n">gridTextColor</span><span class="o">:</span> <span class="s1">&#39;#888&#39;</span><span class="o">,</span>
<a name="l-168"></a>      <span class="n">gridTextSize</span><span class="o">:</span> <span class="m">12</span><span class="o">,</span>
<a name="l-169"></a>      <span class="n">gridTextFamily</span><span class="o">:</span> <span class="s1">&#39;sans-serif&#39;</span><span class="o">,</span>
<a name="l-170"></a>      <span class="n">gridTextWeight</span><span class="o">:</span> <span class="s1">&#39;normal&#39;</span><span class="o">,</span>
<a name="l-171"></a>      <span class="n">hideHover</span><span class="o">:</span> <span class="n">false</span><span class="o">,</span>
<a name="l-172"></a>      <span class="n">yLabelFormat</span><span class="o">:</span> <span class="n">null</span><span class="o">,</span>
<a name="l-173"></a>      <span class="n">xLabelAngle</span><span class="o">:</span> <span class="m">0</span><span class="o">,</span>
<a name="l-174"></a>      <span class="n">numLines</span><span class="o">:</span> <span class="m">5</span><span class="o">,</span>
<a name="l-175"></a>      <span class="nb">padding</span><span class="o">:</span> <span class="m">25</span><span class="o">,</span>
<a name="l-176"></a>      <span class="n">parseTime</span><span class="o">:</span> <span class="n">true</span><span class="o">,</span>
<a name="l-177"></a>      <span class="n">postUnits</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="o">,</span>
<a name="l-178"></a>      <span class="n">preUnits</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="o">,</span>
<a name="l-179"></a>      <span class="n">ymax</span><span class="o">:</span> <span class="s1">&#39;auto&#39;</span><span class="o">,</span>
<a name="l-180"></a>      <span class="n">ymin</span><span class="o">:</span> <span class="s1">&#39;auto 0&#39;</span><span class="o">,</span>
<a name="l-181"></a>      <span class="n">goals</span><span class="o">:</span> <span class="cp">[]</span><span class="o">,</span>
<a name="l-182"></a>      <span class="n">goalStrokeWidth</span><span class="o">:</span> <span class="m">1</span><span class="o">.</span><span class="m">0</span><span class="o">,</span>
<a name="l-183"></a>      <span class="n">goalLineColors</span><span class="o">:</span> <span class="cp">[</span><span class="s1">&#39;#666633&#39;</span><span class="p">,</span> <span class="s1">&#39;#999966&#39;</span><span class="p">,</span> <span class="s1">&#39;#cc6666&#39;</span><span class="p">,</span> <span class="s1">&#39;#663333&#39;</span><span class="cp">]</span><span class="o">,</span>
<a name="l-184"></a>      <span class="n">events</span><span class="o">:</span> <span class="cp">[]</span><span class="o">,</span>
<a name="l-185"></a>      <span class="n">eventStrokeWidth</span><span class="o">:</span> <span class="m">1</span><span class="o">.</span><span class="m">0</span><span class="o">,</span>
<a name="l-186"></a>      <span class="n">eventLineColors</span><span class="o">:</span> <span class="cp">[</span><span class="s1">&#39;#005a04&#39;</span><span class="p">,</span> <span class="s1">&#39;#ccffbb&#39;</span><span class="p">,</span> <span class="s1">&#39;#3a5f0b&#39;</span><span class="p">,</span> <span class="s1">&#39;#005502&#39;</span><span class="cp">]</span><span class="o">,</span>
<a name="l-187"></a>      <span class="n">rangeSelect</span><span class="o">:</span> <span class="n">null</span><span class="o">,</span>
<a name="l-188"></a>      <span class="n">rangeSelectColor</span><span class="o">:</span> <span class="s1">&#39;#eef&#39;</span><span class="o">,</span>
<a name="l-189"></a>      <span class="n">resize</span><span class="o">:</span> <span class="n">false</span>
<a name="l-190"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-191"></a>
<a name="l-192"></a>    <span class="nt">Grid</span><span class="nc">.prototype.setData</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">data</span><span class="o">,</span> <span class="nt">redraw</span><span class="o">)</span> <span class="p">{</span>
<a name="l-193"></a>      <span class="n">var</span> <span class="n">e</span><span class="o">,</span> <span class="n">idx</span><span class="o">,</span> <span class="n">index</span><span class="o">,</span> <span class="n">maxGoal</span><span class="o">,</span> <span class="n">minGoal</span><span class="o">,</span> <span class="n">ret</span><span class="o">,</span> <span class="n">row</span><span class="o">,</span> <span class="n">step</span><span class="o">,</span> <span class="n">total</span><span class="o">,</span> <span class="n">y</span><span class="o">,</span> <span class="n">ykey</span><span class="o">,</span> <span class="n">ymax</span><span class="o">,</span> <span class="n">ymin</span><span class="o">,</span> <span class="n">yval</span><span class="o">,</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-194"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">redraw</span> <span class="o">==</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-195"></a>        <span class="n">redraw</span> <span class="o">=</span> <span class="n">true</span><span class="p">;</span>
<a name="l-196"></a>      <span class="p">}</span>
<a name="l-197"></a>      <span class="nt">this</span><span class="nc">.options.data</span> <span class="o">=</span> <span class="nt">data</span><span class="o">;</span>
<a name="l-198"></a>      <span class="nt">if</span> <span class="o">((</span><span class="nt">data</span> <span class="o">==</span> <span class="nt">null</span><span class="o">)</span> <span class="o">||</span> <span class="nt">data</span><span class="nc">.length</span> <span class="o">===</span> <span class="nt">0</span><span class="o">)</span> <span class="p">{</span>
<a name="l-199"></a>        <span class="n">this</span><span class="o">.</span><span class="n">data</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-200"></a>        <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="nb">clear</span><span class="p">();</span>
<a name="l-201"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">hover</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-202"></a>          <span class="n">this</span><span class="o">.</span><span class="n">hover</span><span class="o">.</span><span class="nb">hide</span><span class="p">();</span>
<a name="l-203"></a>        <span class="p">}</span>
<a name="l-204"></a>        <span class="nt">return</span><span class="o">;</span>
<a name="l-205"></a>      <span class="err">}</span>
<a name="l-206"></a>      <span class="nt">ymax</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.cumulative</span> <span class="o">?</span> <span class="nt">0</span> <span class="o">:</span> <span class="nt">null</span><span class="o">;</span>
<a name="l-207"></a>      <span class="nt">ymin</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.cumulative</span> <span class="o">?</span> <span class="nt">0</span> <span class="o">:</span> <span class="nt">null</span><span class="o">;</span>
<a name="l-208"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.goals.length</span> <span class="o">&gt;</span> <span class="nt">0</span><span class="o">)</span> <span class="p">{</span>
<a name="l-209"></a>        <span class="n">minGoal</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">Math</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">goals</span><span class="p">);</span>
<a name="l-210"></a>        <span class="n">maxGoal</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">max</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">Math</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">goals</span><span class="p">);</span>
<a name="l-211"></a>        <span class="n">ymin</span> <span class="o">=</span> <span class="n">ymin</span> <span class="o">!=</span> <span class="n">null</span> <span class="o">?</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">ymin</span><span class="o">,</span> <span class="n">minGoal</span><span class="p">)</span> <span class="o">:</span> <span class="n">minGoal</span><span class="p">;</span>
<a name="l-212"></a>        <span class="n">ymax</span> <span class="o">=</span> <span class="n">ymax</span> <span class="o">!=</span> <span class="n">null</span> <span class="o">?</span> <span class="n">Math</span><span class="o">.</span><span class="n">max</span><span class="p">(</span><span class="n">ymax</span><span class="o">,</span> <span class="n">maxGoal</span><span class="p">)</span> <span class="o">:</span> <span class="n">maxGoal</span><span class="p">;</span>
<a name="l-213"></a>      <span class="p">}</span>
<a name="l-214"></a>      <span class="nt">this</span><span class="nc">.data</span> <span class="o">=</span> <span class="o">(</span><span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-215"></a>        <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-216"></a>        <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-217"></a>        <span class="n">for</span> <span class="p">(</span><span class="n">index</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">data</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">index</span> <span class="o">=</span> <span class="o">++</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-218"></a>          <span class="n">row</span> <span class="o">=</span> <span class="n">data</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="p">;</span>
<a name="l-219"></a>          <span class="n">ret</span> <span class="o">=</span> <span class="err">{</span>
<a name="l-220"></a>            <span class="n">src</span><span class="o">:</span> <span class="n">row</span>
<a name="l-221"></a>          <span class="p">}</span><span class="o">;</span>
<a name="l-222"></a>          <span class="nt">ret</span><span class="nc">.label</span> <span class="o">=</span> <span class="nt">row</span><span class="cp">[</span><span class="nx">this.options.xkey</span><span class="cp">]</span><span class="o">;</span>
<a name="l-223"></a>          <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.parseTime</span><span class="o">)</span> <span class="p">{</span>
<a name="l-224"></a>            <span class="n">ret</span><span class="o">.</span><span class="n">x</span> <span class="o">=</span> <span class="n">Morris</span><span class="o">.</span><span class="n">parseDate</span><span class="p">(</span><span class="n">ret</span><span class="o">.</span><span class="n">label</span><span class="p">);</span>
<a name="l-225"></a>            <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">dateFormat</span><span class="p">)</span> <span class="err">{</span>
<a name="l-226"></a>              <span class="n">ret</span><span class="o">.</span><span class="n">label</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">dateFormat</span><span class="p">(</span><span class="n">ret</span><span class="o">.</span><span class="n">x</span><span class="p">);</span>
<a name="l-227"></a>            <span class="p">}</span> <span class="nt">else</span> <span class="nt">if</span> <span class="o">(</span><span class="nt">typeof</span> <span class="nt">ret</span><span class="nc">.label</span> <span class="o">===</span> <span class="s1">&#39;number&#39;</span><span class="o">)</span> <span class="p">{</span>
<a name="l-228"></a>              <span class="n">ret</span><span class="o">.</span><span class="n">label</span> <span class="o">=</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">ret</span><span class="o">.</span><span class="n">label</span><span class="p">)</span><span class="o">.</span><span class="n">toString</span><span class="p">();</span>
<a name="l-229"></a>            <span class="p">}</span>
<a name="l-230"></a>          <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-231"></a>            <span class="n">ret</span><span class="o">.</span><span class="n">x</span> <span class="o">=</span> <span class="n">index</span><span class="p">;</span>
<a name="l-232"></a>            <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelFormat</span><span class="p">)</span> <span class="err">{</span>
<a name="l-233"></a>              <span class="n">ret</span><span class="o">.</span><span class="n">label</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelFormat</span><span class="p">(</span><span class="n">ret</span><span class="p">);</span>
<a name="l-234"></a>            <span class="p">}</span>
<a name="l-235"></a>          <span class="err">}</span>
<a name="l-236"></a>          <span class="nt">total</span> <span class="o">=</span> <span class="nt">0</span><span class="o">;</span>
<a name="l-237"></a>          <span class="nt">ret</span><span class="nc">.y</span> <span class="o">=</span> <span class="o">(</span><span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-238"></a>            <span class="n">var</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_len1</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results1</span><span class="p">;</span>
<a name="l-239"></a>            <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">ykeys</span><span class="p">;</span>
<a name="l-240"></a>            <span class="n">_results1</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-241"></a>            <span class="n">for</span> <span class="p">(</span><span class="n">idx</span> <span class="o">=</span> <span class="n">_j</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len1</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_j</span> <span class="o">&lt;</span> <span class="n">_len1</span><span class="p">;</span> <span class="n">idx</span> <span class="o">=</span> <span class="o">++</span><span class="n">_j</span><span class="p">)</span> <span class="err">{</span>
<a name="l-242"></a>              <span class="n">ykey</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">idx</span><span class="cp">]</span><span class="p">;</span>
<a name="l-243"></a>              <span class="n">yval</span> <span class="o">=</span> <span class="n">row</span><span class="cp">[</span><span class="nx">ykey</span><span class="cp">]</span><span class="p">;</span>
<a name="l-244"></a>              <span class="n">if</span> <span class="p">(</span><span class="n">typeof</span> <span class="n">yval</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-245"></a>                <span class="n">yval</span> <span class="o">=</span> <span class="n">parseFloat</span><span class="p">(</span><span class="n">yval</span><span class="p">);</span>
<a name="l-246"></a>              <span class="p">}</span>
<a name="l-247"></a>              <span class="nt">if</span> <span class="o">((</span><span class="nt">yval</span> <span class="o">!=</span> <span class="nt">null</span><span class="o">)</span> <span class="o">&amp;&amp;</span> <span class="nt">typeof</span> <span class="nt">yval</span> <span class="o">!==</span> <span class="s1">&#39;number&#39;</span><span class="o">)</span> <span class="p">{</span>
<a name="l-248"></a>                <span class="n">yval</span> <span class="o">=</span> <span class="n">null</span><span class="p">;</span>
<a name="l-249"></a>              <span class="p">}</span>
<a name="l-250"></a>              <span class="nt">if</span> <span class="o">(</span><span class="nt">yval</span> <span class="o">!=</span> <span class="nt">null</span><span class="o">)</span> <span class="p">{</span>
<a name="l-251"></a>                <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">cumulative</span><span class="p">)</span> <span class="err">{</span>
<a name="l-252"></a>                  <span class="n">total</span> <span class="o">+=</span> <span class="n">yval</span><span class="p">;</span>
<a name="l-253"></a>                <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-254"></a>                  <span class="n">if</span> <span class="p">(</span><span class="n">ymax</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-255"></a>                    <span class="n">ymax</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">max</span><span class="p">(</span><span class="n">yval</span><span class="o">,</span> <span class="n">ymax</span><span class="p">);</span>
<a name="l-256"></a>                    <span class="n">ymin</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">yval</span><span class="o">,</span> <span class="n">ymin</span><span class="p">);</span>
<a name="l-257"></a>                  <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-258"></a>                    <span class="n">ymax</span> <span class="o">=</span> <span class="n">ymin</span> <span class="o">=</span> <span class="n">yval</span><span class="p">;</span>
<a name="l-259"></a>                  <span class="p">}</span>
<a name="l-260"></a>                <span class="err">}</span>
<a name="l-261"></a>              <span class="err">}</span>
<a name="l-262"></a>              <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.cumulative</span> <span class="o">&amp;&amp;</span> <span class="o">(</span><span class="nt">total</span> <span class="o">!=</span> <span class="nt">null</span><span class="o">))</span> <span class="p">{</span>
<a name="l-263"></a>                <span class="n">ymax</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">max</span><span class="p">(</span><span class="n">total</span><span class="o">,</span> <span class="n">ymax</span><span class="p">);</span>
<a name="l-264"></a>                <span class="n">ymin</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">total</span><span class="o">,</span> <span class="n">ymin</span><span class="p">);</span>
<a name="l-265"></a>              <span class="p">}</span>
<a name="l-266"></a>              <span class="nt">_results1</span><span class="nc">.push</span><span class="o">(</span><span class="nt">yval</span><span class="o">);</span>
<a name="l-267"></a>            <span class="err">}</span>
<a name="l-268"></a>            <span class="nt">return</span> <span class="nt">_results1</span><span class="o">;</span>
<a name="l-269"></a>          <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-270"></a>          <span class="nt">_results</span><span class="nc">.push</span><span class="o">(</span><span class="nt">ret</span><span class="o">);</span>
<a name="l-271"></a>        <span class="err">}</span>
<a name="l-272"></a>        <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-273"></a>      <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-274"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.parseTime</span><span class="o">)</span> <span class="p">{</span>
<a name="l-275"></a>        <span class="n">this</span><span class="o">.</span><span class="n">data</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">sort</span><span class="p">(</span><span class="n">function</span><span class="p">(</span><span class="n">a</span><span class="o">,</span> <span class="n">b</span><span class="p">)</span> <span class="err">{</span>
<a name="l-276"></a>          <span class="n">return</span> <span class="p">(</span><span class="n">a</span><span class="o">.</span><span class="n">x</span> <span class="o">&gt;</span> <span class="n">b</span><span class="o">.</span><span class="n">x</span><span class="p">)</span> <span class="o">-</span> <span class="p">(</span><span class="n">b</span><span class="o">.</span><span class="n">x</span> <span class="o">&gt;</span> <span class="n">a</span><span class="o">.</span><span class="n">x</span><span class="p">);</span>
<a name="l-277"></a>        <span class="p">}</span><span class="o">);</span>
<a name="l-278"></a>      <span class="err">}</span>
<a name="l-279"></a>      <span class="nt">this</span><span class="nc">.xmin</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.data</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="nc">.x</span><span class="o">;</span>
<a name="l-280"></a>      <span class="nt">this</span><span class="nc">.xmax</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.data</span><span class="cp">[</span><span class="nx">this.data.length</span> <span class="o">-</span> <span class="mi">1</span><span class="cp">]</span><span class="nc">.x</span><span class="o">;</span>
<a name="l-281"></a>      <span class="nt">this</span><span class="nc">.events</span> <span class="o">=</span> <span class="cp">[]</span><span class="o">;</span>
<a name="l-282"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.events.length</span> <span class="o">&gt;</span> <span class="nt">0</span><span class="o">)</span> <span class="p">{</span>
<a name="l-283"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">parseTime</span><span class="p">)</span> <span class="err">{</span>
<a name="l-284"></a>          <span class="n">this</span><span class="o">.</span><span class="n">events</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-285"></a>            <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-286"></a>            <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">events</span><span class="p">;</span>
<a name="l-287"></a>            <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-288"></a>            <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-289"></a>              <span class="n">e</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-290"></a>              <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">parseDate</span><span class="p">(</span><span class="n">e</span><span class="p">));</span>
<a name="l-291"></a>            <span class="p">}</span>
<a name="l-292"></a>            <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-293"></a>          <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-294"></a>        <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-295"></a>          <span class="n">this</span><span class="o">.</span><span class="n">events</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">events</span><span class="p">;</span>
<a name="l-296"></a>        <span class="p">}</span>
<a name="l-297"></a>        <span class="nt">this</span><span class="nc">.xmax</span> <span class="o">=</span> <span class="nt">Math</span><span class="nc">.max</span><span class="o">(</span><span class="nt">this</span><span class="nc">.xmax</span><span class="o">,</span> <span class="nt">Math</span><span class="nc">.max.apply</span><span class="o">(</span><span class="nt">Math</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.events</span><span class="o">));</span>
<a name="l-298"></a>        <span class="nt">this</span><span class="nc">.xmin</span> <span class="o">=</span> <span class="nt">Math</span><span class="nc">.min</span><span class="o">(</span><span class="nt">this</span><span class="nc">.xmin</span><span class="o">,</span> <span class="nt">Math</span><span class="nc">.min.apply</span><span class="o">(</span><span class="nt">Math</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.events</span><span class="o">));</span>
<a name="l-299"></a>      <span class="err">}</span>
<a name="l-300"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.xmin</span> <span class="o">===</span> <span class="nt">this</span><span class="nc">.xmax</span><span class="o">)</span> <span class="p">{</span>
<a name="l-301"></a>        <span class="n">this</span><span class="o">.</span><span class="n">xmin</span> <span class="o">-=</span> <span class="m">1</span><span class="p">;</span>
<a name="l-302"></a>        <span class="n">this</span><span class="o">.</span><span class="n">xmax</span> <span class="o">+=</span> <span class="m">1</span><span class="p">;</span>
<a name="l-303"></a>      <span class="p">}</span>
<a name="l-304"></a>      <span class="nt">this</span><span class="nc">.ymin</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.yboundary</span><span class="o">(</span><span class="s1">&#39;min&#39;</span><span class="o">,</span> <span class="nt">ymin</span><span class="o">);</span>
<a name="l-305"></a>      <span class="nt">this</span><span class="nc">.ymax</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.yboundary</span><span class="o">(</span><span class="s1">&#39;max&#39;</span><span class="o">,</span> <span class="nt">ymax</span><span class="o">);</span>
<a name="l-306"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.ymin</span> <span class="o">===</span> <span class="nt">this</span><span class="nc">.ymax</span><span class="o">)</span> <span class="p">{</span>
<a name="l-307"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">ymin</span><span class="p">)</span> <span class="err">{</span>
<a name="l-308"></a>          <span class="n">this</span><span class="o">.</span><span class="n">ymin</span> <span class="o">-=</span> <span class="m">1</span><span class="p">;</span>
<a name="l-309"></a>        <span class="p">}</span>
<a name="l-310"></a>        <span class="nt">this</span><span class="nc">.ymax</span> <span class="o">+=</span> <span class="nt">1</span><span class="o">;</span>
<a name="l-311"></a>      <span class="err">}</span>
<a name="l-312"></a>      <span class="nt">if</span> <span class="o">(((</span><span class="nt">_ref</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.options.axes</span><span class="o">)</span> <span class="o">===</span> <span class="nt">true</span> <span class="o">||</span> <span class="nt">_ref</span> <span class="o">===</span> <span class="s1">&#39;both&#39;</span> <span class="o">||</span> <span class="nt">_ref</span> <span class="o">===</span> <span class="s1">&#39;y&#39;</span><span class="o">)</span> <span class="o">||</span> <span class="nt">this</span><span class="nc">.options.grid</span> <span class="o">===</span> <span class="nt">true</span><span class="o">)</span> <span class="p">{</span>
<a name="l-313"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">ymax</span> <span class="o">===</span> <span class="n">this</span><span class="o">.</span><span class="n">gridDefaults</span><span class="o">.</span><span class="n">ymax</span> <span class="o">&amp;&amp;</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">ymin</span> <span class="o">===</span> <span class="n">this</span><span class="o">.</span><span class="n">gridDefaults</span><span class="o">.</span><span class="n">ymin</span><span class="p">)</span> <span class="err">{</span>
<a name="l-314"></a>          <span class="n">this</span><span class="o">.</span><span class="n">grid</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">autoGridLines</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">ymin</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">ymax</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">numLines</span><span class="p">);</span>
<a name="l-315"></a>          <span class="n">this</span><span class="o">.</span><span class="n">ymin</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">ymin</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">grid</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="p">);</span>
<a name="l-316"></a>          <span class="n">this</span><span class="o">.</span><span class="n">ymax</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">max</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">ymax</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">grid</span><span class="cp">[</span><span class="nx">this.grid.length</span> <span class="o">-</span> <span class="mi">1</span><span class="cp">]</span><span class="p">);</span>
<a name="l-317"></a>        <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-318"></a>          <span class="n">step</span> <span class="o">=</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">ymax</span> <span class="o">-</span> <span class="n">this</span><span class="o">.</span><span class="n">ymin</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">numLines</span> <span class="o">-</span> <span class="m">1</span><span class="p">);</span>
<a name="l-319"></a>          <span class="n">this</span><span class="o">.</span><span class="n">grid</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-320"></a>            <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_ref2</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-321"></a>            <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-322"></a>            <span class="n">for</span> <span class="p">(</span><span class="n">y</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="n">_ref1</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">ymin</span><span class="o">,</span> <span class="n">_ref2</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">ymax</span><span class="p">;</span> <span class="n">step</span> <span class="o">&gt;</span> <span class="m">0</span> <span class="o">?</span> <span class="n">_i</span> <span class="o">&lt;=</span> <span class="n">_ref2</span> <span class="o">:</span> <span class="n">_i</span> <span class="o">&gt;=</span> <span class="n">_ref2</span><span class="p">;</span> <span class="n">y</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">+=</span> <span class="n">step</span><span class="p">)</span> <span class="err">{</span>
<a name="l-323"></a>              <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">y</span><span class="p">);</span>
<a name="l-324"></a>            <span class="p">}</span>
<a name="l-325"></a>            <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-326"></a>          <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-327"></a>        <span class="err">}</span>
<a name="l-328"></a>      <span class="err">}</span>
<a name="l-329"></a>      <span class="nt">this</span><span class="nc">.dirty</span> <span class="o">=</span> <span class="nt">true</span><span class="o">;</span>
<a name="l-330"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">redraw</span><span class="o">)</span> <span class="p">{</span>
<a name="l-331"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">redraw</span><span class="p">();</span>
<a name="l-332"></a>      <span class="p">}</span>
<a name="l-333"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-334"></a>
<a name="l-335"></a>    <span class="nt">Grid</span><span class="nc">.prototype.yboundary</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">boundaryType</span><span class="o">,</span> <span class="nt">currentValue</span><span class="o">)</span> <span class="p">{</span>
<a name="l-336"></a>      <span class="n">var</span> <span class="n">boundaryOption</span><span class="o">,</span> <span class="n">suggestedValue</span><span class="p">;</span>
<a name="l-337"></a>      <span class="n">boundaryOption</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="cp">[</span><span class="s2">&quot;y&quot;</span> <span class="o">+</span> <span class="nx">boundaryType</span><span class="cp">]</span><span class="p">;</span>
<a name="l-338"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">typeof</span> <span class="n">boundaryOption</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-339"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">boundaryOption</span><span class="o">.</span><span class="n">slice</span><span class="p">(</span><span class="m">0</span><span class="o">,</span> <span class="m">4</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;auto&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-340"></a>          <span class="n">if</span> <span class="p">(</span><span class="n">boundaryOption</span><span class="o">.</span><span class="n">length</span> <span class="o">&gt;</span> <span class="m">5</span><span class="p">)</span> <span class="err">{</span>
<a name="l-341"></a>            <span class="n">suggestedValue</span> <span class="o">=</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">boundaryOption</span><span class="o">.</span><span class="n">slice</span><span class="p">(</span><span class="m">5</span><span class="p">)</span><span class="o">,</span> <span class="m">10</span><span class="p">);</span>
<a name="l-342"></a>            <span class="n">if</span> <span class="p">(</span><span class="n">currentValue</span> <span class="o">==</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-343"></a>              <span class="n">return</span> <span class="n">suggestedValue</span><span class="p">;</span>
<a name="l-344"></a>            <span class="p">}</span>
<a name="l-345"></a>            <span class="nt">return</span> <span class="nt">Math</span><span class="cp">[</span><span class="nx">boundaryType</span><span class="cp">]</span><span class="o">(</span><span class="nt">currentValue</span><span class="o">,</span> <span class="nt">suggestedValue</span><span class="o">);</span>
<a name="l-346"></a>          <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-347"></a>            <span class="n">if</span> <span class="p">(</span><span class="n">currentValue</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-348"></a>              <span class="n">return</span> <span class="n">currentValue</span><span class="p">;</span>
<a name="l-349"></a>            <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-350"></a>              <span class="n">return</span> <span class="m">0</span><span class="p">;</span>
<a name="l-351"></a>            <span class="p">}</span>
<a name="l-352"></a>          <span class="err">}</span>
<a name="l-353"></a>        <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-354"></a>          <span class="n">return</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">boundaryOption</span><span class="o">,</span> <span class="m">10</span><span class="p">);</span>
<a name="l-355"></a>        <span class="p">}</span>
<a name="l-356"></a>      <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-357"></a>        <span class="n">return</span> <span class="n">boundaryOption</span><span class="p">;</span>
<a name="l-358"></a>      <span class="p">}</span>
<a name="l-359"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-360"></a>
<a name="l-361"></a>    <span class="nt">Grid</span><span class="nc">.prototype.autoGridLines</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">ymin</span><span class="o">,</span> <span class="nt">ymax</span><span class="o">,</span> <span class="nt">nlines</span><span class="o">)</span> <span class="p">{</span>
<a name="l-362"></a>      <span class="n">var</span> <span class="n">gmax</span><span class="o">,</span> <span class="n">gmin</span><span class="o">,</span> <span class="n">grid</span><span class="o">,</span> <span class="n">smag</span><span class="o">,</span> <span class="n">span</span><span class="o">,</span> <span class="n">step</span><span class="o">,</span> <span class="n">unit</span><span class="o">,</span> <span class="n">y</span><span class="o">,</span> <span class="n">ymag</span><span class="p">;</span>
<a name="l-363"></a>      <span class="n">span</span> <span class="o">=</span> <span class="n">ymax</span> <span class="o">-</span> <span class="n">ymin</span><span class="p">;</span>
<a name="l-364"></a>      <span class="n">ymag</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">floor</span><span class="p">(</span><span class="n">Math</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">span</span><span class="p">)</span> <span class="o">/</span> <span class="n">Math</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="m">10</span><span class="p">));</span>
<a name="l-365"></a>      <span class="n">unit</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">pow</span><span class="p">(</span><span class="m">10</span><span class="o">,</span> <span class="n">ymag</span><span class="p">);</span>
<a name="l-366"></a>      <span class="n">gmin</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">floor</span><span class="p">(</span><span class="n">ymin</span> <span class="o">/</span> <span class="n">unit</span><span class="p">)</span> <span class="o">*</span> <span class="n">unit</span><span class="p">;</span>
<a name="l-367"></a>      <span class="n">gmax</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">ceil</span><span class="p">(</span><span class="n">ymax</span> <span class="o">/</span> <span class="n">unit</span><span class="p">)</span> <span class="o">*</span> <span class="n">unit</span><span class="p">;</span>
<a name="l-368"></a>      <span class="n">step</span> <span class="o">=</span> <span class="p">(</span><span class="n">gmax</span> <span class="o">-</span> <span class="n">gmin</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="n">nlines</span> <span class="o">-</span> <span class="m">1</span><span class="p">);</span>
<a name="l-369"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">unit</span> <span class="o">===</span> <span class="m">1</span> <span class="o">&amp;&amp;</span> <span class="n">step</span> <span class="o">&gt;</span> <span class="m">1</span> <span class="o">&amp;&amp;</span> <span class="n">Math</span><span class="o">.</span><span class="n">ceil</span><span class="p">(</span><span class="n">step</span><span class="p">)</span> <span class="o">!==</span> <span class="n">step</span><span class="p">)</span> <span class="err">{</span>
<a name="l-370"></a>        <span class="n">step</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">ceil</span><span class="p">(</span><span class="n">step</span><span class="p">);</span>
<a name="l-371"></a>        <span class="n">gmax</span> <span class="o">=</span> <span class="n">gmin</span> <span class="o">+</span> <span class="n">step</span> <span class="o">*</span> <span class="p">(</span><span class="n">nlines</span> <span class="o">-</span> <span class="m">1</span><span class="p">);</span>
<a name="l-372"></a>      <span class="p">}</span>
<a name="l-373"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">gmin</span> <span class="o">&lt;</span> <span class="nt">0</span> <span class="o">&amp;&amp;</span> <span class="nt">gmax</span> <span class="o">&gt;</span> <span class="nt">0</span><span class="o">)</span> <span class="p">{</span>
<a name="l-374"></a>        <span class="n">gmin</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">floor</span><span class="p">(</span><span class="n">ymin</span> <span class="o">/</span> <span class="n">step</span><span class="p">)</span> <span class="o">*</span> <span class="n">step</span><span class="p">;</span>
<a name="l-375"></a>        <span class="n">gmax</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">ceil</span><span class="p">(</span><span class="n">ymax</span> <span class="o">/</span> <span class="n">step</span><span class="p">)</span> <span class="o">*</span> <span class="n">step</span><span class="p">;</span>
<a name="l-376"></a>      <span class="p">}</span>
<a name="l-377"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">step</span> <span class="o">&lt;</span> <span class="nt">1</span><span class="o">)</span> <span class="p">{</span>
<a name="l-378"></a>        <span class="n">smag</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">floor</span><span class="p">(</span><span class="n">Math</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">step</span><span class="p">)</span> <span class="o">/</span> <span class="n">Math</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="m">10</span><span class="p">));</span>
<a name="l-379"></a>        <span class="n">grid</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-380"></a>          <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-381"></a>          <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-382"></a>          <span class="n">for</span> <span class="p">(</span><span class="n">y</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="n">gmin</span><span class="p">;</span> <span class="n">step</span> <span class="o">&gt;</span> <span class="m">0</span> <span class="o">?</span> <span class="n">_i</span> <span class="o">&lt;=</span> <span class="n">gmax</span> <span class="o">:</span> <span class="n">_i</span> <span class="o">&gt;=</span> <span class="n">gmax</span><span class="p">;</span> <span class="n">y</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">+=</span> <span class="n">step</span><span class="p">)</span> <span class="err">{</span>
<a name="l-383"></a>            <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">parseFloat</span><span class="p">(</span><span class="n">y</span><span class="o">.</span><span class="n">toFixed</span><span class="p">(</span><span class="m">1</span> <span class="o">-</span> <span class="n">smag</span><span class="p">)));</span>
<a name="l-384"></a>          <span class="p">}</span>
<a name="l-385"></a>          <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-386"></a>        <span class="err">}</span><span class="o">)();</span>
<a name="l-387"></a>      <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-388"></a>        <span class="n">grid</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-389"></a>          <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-390"></a>          <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-391"></a>          <span class="n">for</span> <span class="p">(</span><span class="n">y</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="n">gmin</span><span class="p">;</span> <span class="n">step</span> <span class="o">&gt;</span> <span class="m">0</span> <span class="o">?</span> <span class="n">_i</span> <span class="o">&lt;=</span> <span class="n">gmax</span> <span class="o">:</span> <span class="n">_i</span> <span class="o">&gt;=</span> <span class="n">gmax</span><span class="p">;</span> <span class="n">y</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">+=</span> <span class="n">step</span><span class="p">)</span> <span class="err">{</span>
<a name="l-392"></a>            <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">y</span><span class="p">);</span>
<a name="l-393"></a>          <span class="p">}</span>
<a name="l-394"></a>          <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-395"></a>        <span class="err">}</span><span class="o">)();</span>
<a name="l-396"></a>      <span class="err">}</span>
<a name="l-397"></a>      <span class="nt">return</span> <span class="nt">grid</span><span class="o">;</span>
<a name="l-398"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-399"></a>
<a name="l-400"></a>    <span class="nt">Grid</span><span class="nc">.prototype._calc</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-401"></a>      <span class="n">var</span> <span class="n">bottomOffsets</span><span class="o">,</span> <span class="n">gridLine</span><span class="o">,</span> <span class="n">h</span><span class="o">,</span> <span class="n">i</span><span class="o">,</span> <span class="n">w</span><span class="o">,</span> <span class="n">yLabelWidths</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_ref1</span><span class="p">;</span>
<a name="l-402"></a>      <span class="n">w</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">width</span><span class="p">();</span>
<a name="l-403"></a>      <span class="n">h</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">height</span><span class="p">();</span>
<a name="l-404"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">elementWidth</span> <span class="o">!==</span> <span class="n">w</span> <span class="o">||</span> <span class="n">this</span><span class="o">.</span><span class="n">elementHeight</span> <span class="o">!==</span> <span class="n">h</span> <span class="o">||</span> <span class="n">this</span><span class="o">.</span><span class="n">dirty</span><span class="p">)</span> <span class="err">{</span>
<a name="l-405"></a>        <span class="n">this</span><span class="o">.</span><span class="n">elementWidth</span> <span class="o">=</span> <span class="n">w</span><span class="p">;</span>
<a name="l-406"></a>        <span class="n">this</span><span class="o">.</span><span class="n">elementHeight</span> <span class="o">=</span> <span class="n">h</span><span class="p">;</span>
<a name="l-407"></a>        <span class="n">this</span><span class="o">.</span><span class="n">dirty</span> <span class="o">=</span> <span class="n">false</span><span class="p">;</span>
<a name="l-408"></a>        <span class="n">this</span><span class="o">.</span><span class="nb">left</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="nb">padding</span><span class="p">;</span>
<a name="l-409"></a>        <span class="n">this</span><span class="o">.</span><span class="nb">right</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">elementWidth</span> <span class="o">-</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="nb">padding</span><span class="p">;</span>
<a name="l-410"></a>        <span class="n">this</span><span class="o">.</span><span class="nb">top</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="nb">padding</span><span class="p">;</span>
<a name="l-411"></a>        <span class="n">this</span><span class="o">.</span><span class="nb">bottom</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">elementHeight</span> <span class="o">-</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="nb">padding</span><span class="p">;</span>
<a name="l-412"></a>        <span class="n">if</span> <span class="p">((</span><span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">axes</span><span class="p">)</span> <span class="o">===</span> <span class="n">true</span> <span class="o">||</span> <span class="n">_ref</span> <span class="o">===</span> <span class="s1">&#39;both&#39;</span> <span class="o">||</span> <span class="n">_ref</span> <span class="o">===</span> <span class="s1">&#39;y&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-413"></a>          <span class="n">yLabelWidths</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-414"></a>            <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-415"></a>            <span class="n">_ref1</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">grid</span><span class="p">;</span>
<a name="l-416"></a>            <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-417"></a>            <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref1</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-418"></a>              <span class="n">gridLine</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-419"></a>              <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">measureText</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">yAxisFormat</span><span class="p">(</span><span class="n">gridLine</span><span class="p">))</span><span class="o">.</span><span class="nb">width</span><span class="p">);</span>
<a name="l-420"></a>            <span class="p">}</span>
<a name="l-421"></a>            <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-422"></a>          <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-423"></a>          <span class="nt">this</span><span class="nc">.left</span> <span class="o">+=</span> <span class="nt">Math</span><span class="nc">.max.apply</span><span class="o">(</span><span class="nt">Math</span><span class="o">,</span> <span class="nt">yLabelWidths</span><span class="o">);</span>
<a name="l-424"></a>        <span class="err">}</span>
<a name="l-425"></a>        <span class="nt">if</span> <span class="o">((</span><span class="nt">_ref1</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.options.axes</span><span class="o">)</span> <span class="o">===</span> <span class="nt">true</span> <span class="o">||</span> <span class="nt">_ref1</span> <span class="o">===</span> <span class="s1">&#39;both&#39;</span> <span class="o">||</span> <span class="nt">_ref1</span> <span class="o">===</span> <span class="s1">&#39;x&#39;</span><span class="o">)</span> <span class="p">{</span>
<a name="l-426"></a>          <span class="n">bottomOffsets</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-427"></a>            <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_ref2</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-428"></a>            <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-429"></a>            <span class="n">for</span> <span class="p">(</span><span class="n">i</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_ref2</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref2</span> <span class="o">?</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_ref2</span> <span class="o">:</span> <span class="n">_i</span> <span class="o">&gt;</span> <span class="n">_ref2</span><span class="p">;</span> <span class="n">i</span> <span class="o">=</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref2</span> <span class="o">?</span> <span class="o">++</span><span class="n">_i</span> <span class="o">:</span> <span class="o">--</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-430"></a>              <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">measureText</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span><span class="o">.</span><span class="nb">text</span><span class="o">,</span> <span class="o">-</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span><span class="p">)</span><span class="o">.</span><span class="nb">height</span><span class="p">);</span>
<a name="l-431"></a>            <span class="p">}</span>
<a name="l-432"></a>            <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-433"></a>          <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-434"></a>          <span class="nt">this</span><span class="nc">.bottom</span> <span class="nt">-</span><span class="o">=</span> <span class="nt">Math</span><span class="nc">.max.apply</span><span class="o">(</span><span class="nt">Math</span><span class="o">,</span> <span class="nt">bottomOffsets</span><span class="o">);</span>
<a name="l-435"></a>        <span class="err">}</span>
<a name="l-436"></a>        <span class="nt">this</span><span class="nc">.width</span> <span class="o">=</span> <span class="nt">Math</span><span class="nc">.max</span><span class="o">(</span><span class="nt">1</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.right</span> <span class="nt">-</span> <span class="nt">this</span><span class="nc">.left</span><span class="o">);</span>
<a name="l-437"></a>        <span class="nt">this</span><span class="nc">.height</span> <span class="o">=</span> <span class="nt">Math</span><span class="nc">.max</span><span class="o">(</span><span class="nt">1</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.bottom</span> <span class="nt">-</span> <span class="nt">this</span><span class="nc">.top</span><span class="o">);</span>
<a name="l-438"></a>        <span class="nt">this</span><span class="nc">.dx</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.width</span> <span class="o">/</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.xmax</span> <span class="nt">-</span> <span class="nt">this</span><span class="nc">.xmin</span><span class="o">);</span>
<a name="l-439"></a>        <span class="nt">this</span><span class="nc">.dy</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.height</span> <span class="o">/</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.ymax</span> <span class="nt">-</span> <span class="nt">this</span><span class="nc">.ymin</span><span class="o">);</span>
<a name="l-440"></a>        <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.calc</span><span class="o">)</span> <span class="p">{</span>
<a name="l-441"></a>          <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">calc</span><span class="p">();</span>
<a name="l-442"></a>        <span class="p">}</span>
<a name="l-443"></a>      <span class="err">}</span>
<a name="l-444"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-445"></a>
<a name="l-446"></a>    <span class="nt">Grid</span><span class="nc">.prototype.transY</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">y</span><span class="o">)</span> <span class="p">{</span>
<a name="l-447"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="nb">bottom</span> <span class="o">-</span> <span class="p">(</span><span class="n">y</span> <span class="o">-</span> <span class="n">this</span><span class="o">.</span><span class="n">ymin</span><span class="p">)</span> <span class="o">*</span> <span class="n">this</span><span class="o">.</span><span class="n">dy</span><span class="p">;</span>
<a name="l-448"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-449"></a>
<a name="l-450"></a>    <span class="nt">Grid</span><span class="nc">.prototype.transX</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">)</span> <span class="p">{</span>
<a name="l-451"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">length</span> <span class="o">===</span> <span class="m">1</span><span class="p">)</span> <span class="err">{</span>
<a name="l-452"></a>        <span class="n">return</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="nb">left</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="nb">right</span><span class="p">)</span> <span class="o">/</span> <span class="m">2</span><span class="p">;</span>
<a name="l-453"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-454"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="nb">left</span> <span class="o">+</span> <span class="p">(</span><span class="n">x</span> <span class="o">-</span> <span class="n">this</span><span class="o">.</span><span class="n">xmin</span><span class="p">)</span> <span class="o">*</span> <span class="n">this</span><span class="o">.</span><span class="n">dx</span><span class="p">;</span>
<a name="l-455"></a>      <span class="p">}</span>
<a name="l-456"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-457"></a>
<a name="l-458"></a>    <span class="nt">Grid</span><span class="nc">.prototype.redraw</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-459"></a>      <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="nb">clear</span><span class="p">();</span>
<a name="l-460"></a>      <span class="n">this</span><span class="o">.</span><span class="n">_calc</span><span class="p">();</span>
<a name="l-461"></a>      <span class="n">this</span><span class="o">.</span><span class="n">drawGrid</span><span class="p">();</span>
<a name="l-462"></a>      <span class="n">this</span><span class="o">.</span><span class="n">drawGoals</span><span class="p">();</span>
<a name="l-463"></a>      <span class="n">this</span><span class="o">.</span><span class="n">drawEvents</span><span class="p">();</span>
<a name="l-464"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">draw</span><span class="p">)</span> <span class="err">{</span>
<a name="l-465"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">draw</span><span class="p">();</span>
<a name="l-466"></a>      <span class="p">}</span>
<a name="l-467"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-468"></a>
<a name="l-469"></a>    <span class="nt">Grid</span><span class="nc">.prototype.measureText</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">text</span><span class="o">,</span> <span class="nt">angle</span><span class="o">)</span> <span class="p">{</span>
<a name="l-470"></a>      <span class="n">var</span> <span class="n">ret</span><span class="o">,</span> <span class="n">tt</span><span class="p">;</span>
<a name="l-471"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">angle</span> <span class="o">==</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-472"></a>        <span class="n">angle</span> <span class="o">=</span> <span class="m">0</span><span class="p">;</span>
<a name="l-473"></a>      <span class="p">}</span>
<a name="l-474"></a>      <span class="nt">tt</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.raphael.text</span><span class="o">(</span><span class="nt">100</span><span class="o">,</span> <span class="nt">100</span><span class="o">,</span> <span class="nt">text</span><span class="o">)</span><span class="nc">.attr</span><span class="o">(</span><span class="s1">&#39;font-size&#39;</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.options.gridTextSize</span><span class="o">)</span><span class="nc">.attr</span><span class="o">(</span><span class="s1">&#39;font-family&#39;</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.options.gridTextFamily</span><span class="o">)</span><span class="nc">.attr</span><span class="o">(</span><span class="s1">&#39;font-weight&#39;</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.options.gridTextWeight</span><span class="o">)</span><span class="nc">.rotate</span><span class="o">(</span><span class="nt">angle</span><span class="o">);</span>
<a name="l-475"></a>      <span class="nt">ret</span> <span class="o">=</span> <span class="nt">tt</span><span class="nc">.getBBox</span><span class="o">();</span>
<a name="l-476"></a>      <span class="nt">tt</span><span class="nc">.remove</span><span class="o">();</span>
<a name="l-477"></a>      <span class="nt">return</span> <span class="nt">ret</span><span class="o">;</span>
<a name="l-478"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-479"></a>
<a name="l-480"></a>    <span class="nt">Grid</span><span class="nc">.prototype.yAxisFormat</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">label</span><span class="o">)</span> <span class="p">{</span>
<a name="l-481"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">yLabelFormat</span><span class="p">(</span><span class="n">label</span><span class="p">);</span>
<a name="l-482"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-483"></a>
<a name="l-484"></a>    <span class="nt">Grid</span><span class="nc">.prototype.yLabelFormat</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">label</span><span class="o">)</span> <span class="p">{</span>
<a name="l-485"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">typeof</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">yLabelFormat</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-486"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">yLabelFormat</span><span class="p">(</span><span class="n">label</span><span class="p">);</span>
<a name="l-487"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-488"></a>        <span class="n">return</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">preUnits</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">commas</span><span class="p">(</span><span class="n">label</span><span class="p">))</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">postUnits</span><span class="p">;</span>
<a name="l-489"></a>      <span class="p">}</span>
<a name="l-490"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-491"></a>
<a name="l-492"></a>    <span class="nt">Grid</span><span class="nc">.prototype.drawGrid</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-493"></a>      <span class="n">var</span> <span class="n">lineY</span><span class="o">,</span> <span class="n">y</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_ref2</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-494"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">grid</span> <span class="o">===</span> <span class="n">false</span> <span class="o">&amp;&amp;</span> <span class="p">((</span><span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">axes</span><span class="p">)</span> <span class="o">!==</span> <span class="n">true</span> <span class="o">&amp;&amp;</span> <span class="n">_ref</span> <span class="o">!==</span> <span class="s1">&#39;both&#39;</span> <span class="o">&amp;&amp;</span> <span class="n">_ref</span> <span class="o">!==</span> <span class="s1">&#39;y&#39;</span><span class="p">))</span> <span class="err">{</span>
<a name="l-495"></a>        <span class="n">return</span><span class="p">;</span>
<a name="l-496"></a>      <span class="p">}</span>
<a name="l-497"></a>      <span class="nt">_ref1</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.grid</span><span class="o">;</span>
<a name="l-498"></a>      <span class="nt">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="o">;</span>
<a name="l-499"></a>      <span class="nt">for</span> <span class="o">(</span><span class="nt">_i</span> <span class="o">=</span> <span class="nt">0</span><span class="o">,</span> <span class="nt">_len</span> <span class="o">=</span> <span class="nt">_ref1</span><span class="nc">.length</span><span class="o">;</span> <span class="nt">_i</span> <span class="o">&lt;</span> <span class="nt">_len</span><span class="o">;</span> <span class="nt">_i</span><span class="o">++)</span> <span class="p">{</span>
<a name="l-500"></a>        <span class="n">lineY</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-501"></a>        <span class="n">y</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">transY</span><span class="p">(</span><span class="n">lineY</span><span class="p">);</span>
<a name="l-502"></a>        <span class="n">if</span> <span class="p">((</span><span class="n">_ref2</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">axes</span><span class="p">)</span> <span class="o">===</span> <span class="n">true</span> <span class="o">||</span> <span class="n">_ref2</span> <span class="o">===</span> <span class="s1">&#39;both&#39;</span> <span class="o">||</span> <span class="n">_ref2</span> <span class="o">===</span> <span class="s1">&#39;y&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-503"></a>          <span class="n">this</span><span class="o">.</span><span class="n">drawYAxisLabel</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="nb">left</span> <span class="o">-</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="nb">padding</span> <span class="o">/</span> <span class="m">2</span><span class="o">,</span> <span class="n">y</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">yAxisFormat</span><span class="p">(</span><span class="n">lineY</span><span class="p">));</span>
<a name="l-504"></a>        <span class="p">}</span>
<a name="l-505"></a>        <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.grid</span><span class="o">)</span> <span class="p">{</span>
<a name="l-506"></a>          <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">drawGridLine</span><span class="p">(</span><span class="s2">&quot;M&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="nb">left</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">y</span> <span class="o">+</span> <span class="s2">&quot;H&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="nb">left</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="nb">width</span><span class="p">)));</span>
<a name="l-507"></a>        <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-508"></a>          <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">void</span> <span class="m">0</span><span class="p">);</span>
<a name="l-509"></a>        <span class="p">}</span>
<a name="l-510"></a>      <span class="err">}</span>
<a name="l-511"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-512"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-513"></a>
<a name="l-514"></a>    <span class="nt">Grid</span><span class="nc">.prototype.drawGoals</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-515"></a>      <span class="n">var</span> <span class="nb">color</span><span class="o">,</span> <span class="n">goal</span><span class="o">,</span> <span class="n">i</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-516"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">goals</span><span class="p">;</span>
<a name="l-517"></a>      <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-518"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">i</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">i</span> <span class="o">=</span> <span class="o">++</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-519"></a>        <span class="n">goal</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-520"></a>        <span class="nb">color</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">goalLineColors</span><span class="cp">[</span><span class="nx">i</span> <span class="o">%</span> <span class="nx">this.options.goalLineColors.length</span><span class="cp">]</span><span class="p">;</span>
<a name="l-521"></a>        <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">drawGoal</span><span class="p">(</span><span class="n">goal</span><span class="o">,</span> <span class="nb">color</span><span class="p">));</span>
<a name="l-522"></a>      <span class="p">}</span>
<a name="l-523"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-524"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-525"></a>
<a name="l-526"></a>    <span class="nt">Grid</span><span class="nc">.prototype.drawEvents</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-527"></a>      <span class="n">var</span> <span class="nb">color</span><span class="o">,</span> <span class="n">event</span><span class="o">,</span> <span class="n">i</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-528"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">events</span><span class="p">;</span>
<a name="l-529"></a>      <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-530"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">i</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">i</span> <span class="o">=</span> <span class="o">++</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-531"></a>        <span class="n">event</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-532"></a>        <span class="nb">color</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">eventLineColors</span><span class="cp">[</span><span class="nx">i</span> <span class="o">%</span> <span class="nx">this.options.eventLineColors.length</span><span class="cp">]</span><span class="p">;</span>
<a name="l-533"></a>        <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">drawEvent</span><span class="p">(</span><span class="n">event</span><span class="o">,</span> <span class="nb">color</span><span class="p">));</span>
<a name="l-534"></a>      <span class="p">}</span>
<a name="l-535"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-536"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-537"></a>
<a name="l-538"></a>    <span class="nt">Grid</span><span class="nc">.prototype.drawGoal</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">goal</span><span class="o">,</span> <span class="nt">color</span><span class="o">)</span> <span class="p">{</span>
<a name="l-539"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">path</span><span class="p">(</span><span class="s2">&quot;M&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="nb">left</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">transY</span><span class="p">(</span><span class="n">goal</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;H&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="nb">right</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke&#39;</span><span class="o">,</span> <span class="nb">color</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke-width&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">goalStrokeWidth</span><span class="p">);</span>
<a name="l-540"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-541"></a>
<a name="l-542"></a>    <span class="nt">Grid</span><span class="nc">.prototype.drawEvent</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">event</span><span class="o">,</span> <span class="nt">color</span><span class="o">)</span> <span class="p">{</span>
<a name="l-543"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">path</span><span class="p">(</span><span class="s2">&quot;M&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">transX</span><span class="p">(</span><span class="n">event</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="nb">bottom</span> <span class="o">+</span> <span class="s2">&quot;V&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="nb">top</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke&#39;</span><span class="o">,</span> <span class="nb">color</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke-width&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">eventStrokeWidth</span><span class="p">);</span>
<a name="l-544"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-545"></a>
<a name="l-546"></a>    <span class="nt">Grid</span><span class="nc">.prototype.drawYAxisLabel</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">xPos</span><span class="o">,</span> <span class="nt">yPos</span><span class="o">,</span> <span class="nt">text</span><span class="o">)</span> <span class="p">{</span>
<a name="l-547"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="nb">text</span><span class="p">(</span><span class="n">xPos</span><span class="o">,</span> <span class="n">yPos</span><span class="o">,</span> <span class="nb">text</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-size&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextSize</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-family&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextFamily</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-weight&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextWeight</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;fill&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextColor</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;text-anchor&#39;</span><span class="o">,</span> <span class="s1">&#39;end&#39;</span><span class="p">);</span>
<a name="l-548"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-549"></a>
<a name="l-550"></a>    <span class="nt">Grid</span><span class="nc">.prototype.drawGridLine</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">path</span><span class="o">)</span> <span class="p">{</span>
<a name="l-551"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">path</span><span class="p">(</span><span class="n">path</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridLineColor</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke-width&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridStrokeWidth</span><span class="p">);</span>
<a name="l-552"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-553"></a>
<a name="l-554"></a>    <span class="nt">Grid</span><span class="nc">.prototype.startRange</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">)</span> <span class="p">{</span>
<a name="l-555"></a>      <span class="n">this</span><span class="o">.</span><span class="n">hover</span><span class="o">.</span><span class="nb">hide</span><span class="p">();</span>
<a name="l-556"></a>      <span class="n">this</span><span class="o">.</span><span class="n">selectFrom</span> <span class="o">=</span> <span class="n">x</span><span class="p">;</span>
<a name="l-557"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">selectionRect</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="err">{</span>
<a name="l-558"></a>        <span class="n">x</span><span class="o">:</span> <span class="n">x</span><span class="o">,</span>
<a name="l-559"></a>        <span class="nb">width</span><span class="o">:</span> <span class="m">0</span>
<a name="l-560"></a>      <span class="p">}</span><span class="o">)</span><span class="nc">.show</span><span class="o">();</span>
<a name="l-561"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-562"></a>
<a name="l-563"></a>    <span class="nt">Grid</span><span class="nc">.prototype.endRange</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">)</span> <span class="p">{</span>
<a name="l-564"></a>      <span class="n">var</span> <span class="n">end</span><span class="o">,</span> <span class="n">start</span><span class="p">;</span>
<a name="l-565"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">selectFrom</span><span class="p">)</span> <span class="err">{</span>
<a name="l-566"></a>        <span class="n">start</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">selectFrom</span><span class="o">,</span> <span class="n">x</span><span class="p">);</span>
<a name="l-567"></a>        <span class="n">end</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">max</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">selectFrom</span><span class="o">,</span> <span class="n">x</span><span class="p">);</span>
<a name="l-568"></a>        <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">rangeSelect</span><span class="o">.</span><span class="n">call</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">,</span> <span class="err">{</span>
<a name="l-569"></a>          <span class="n">start</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">this.hitTest</span><span class="p">(</span><span class="nx">start</span><span class="p">)</span><span class="cp">]</span><span class="o">.</span><span class="n">x</span><span class="o">,</span>
<a name="l-570"></a>          <span class="n">end</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">this.hitTest</span><span class="p">(</span><span class="nx">end</span><span class="p">)</span><span class="cp">]</span><span class="o">.</span><span class="n">x</span>
<a name="l-571"></a>        <span class="p">}</span><span class="o">);</span>
<a name="l-572"></a>        <span class="nt">return</span> <span class="nt">this</span><span class="nc">.selectFrom</span> <span class="o">=</span> <span class="nt">null</span><span class="o">;</span>
<a name="l-573"></a>      <span class="err">}</span>
<a name="l-574"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-575"></a>
<a name="l-576"></a>    <span class="nt">Grid</span><span class="nc">.prototype.resizeHandler</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-577"></a>      <span class="n">this</span><span class="o">.</span><span class="n">timeoutId</span> <span class="o">=</span> <span class="n">null</span><span class="p">;</span>
<a name="l-578"></a>      <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">setSize</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">width</span><span class="p">()</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">height</span><span class="p">());</span>
<a name="l-579"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">redraw</span><span class="p">();</span>
<a name="l-580"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-581"></a>
<a name="l-582"></a>    <span class="nt">return</span> <span class="nt">Grid</span><span class="o">;</span>
<a name="l-583"></a>
<a name="l-584"></a>  <span class="err">}</span><span class="o">)(</span><span class="nt">Morris</span><span class="nc">.EventEmitter</span><span class="o">);</span>
<a name="l-585"></a>
<a name="l-586"></a>  <span class="nt">Morris</span><span class="nc">.parseDate</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">date</span><span class="o">)</span> <span class="p">{</span>
<a name="l-587"></a>    <span class="n">var</span> <span class="n">isecs</span><span class="o">,</span> <span class="n">m</span><span class="o">,</span> <span class="n">msecs</span><span class="o">,</span> <span class="n">n</span><span class="o">,</span> <span class="n">o</span><span class="o">,</span> <span class="n">offsetmins</span><span class="o">,</span> <span class="n">p</span><span class="o">,</span> <span class="n">q</span><span class="o">,</span> <span class="n">r</span><span class="o">,</span> <span class="n">ret</span><span class="o">,</span> <span class="n">secs</span><span class="p">;</span>
<a name="l-588"></a>    <span class="n">if</span> <span class="p">(</span><span class="n">typeof</span> <span class="n">date</span> <span class="o">===</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-589"></a>      <span class="n">return</span> <span class="n">date</span><span class="p">;</span>
<a name="l-590"></a>    <span class="p">}</span>
<a name="l-591"></a>    <span class="nt">m</span> <span class="o">=</span> <span class="nt">date</span><span class="nc">.match</span><span class="o">(/^(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span> <span class="nt">Q</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">)$/);</span>
<a name="l-592"></a>    <span class="nt">n</span> <span class="o">=</span> <span class="nt">date</span><span class="nc">.match</span><span class="o">(/^(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span><span class="nt">-</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)$/);</span>
<a name="l-593"></a>    <span class="nt">o</span> <span class="o">=</span> <span class="nt">date</span><span class="nc">.match</span><span class="o">(/^(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span><span class="nt">-</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span><span class="nt">-</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)$/);</span>
<a name="l-594"></a>    <span class="nt">p</span> <span class="o">=</span> <span class="nt">date</span><span class="nc">.match</span><span class="o">(/^(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span> <span class="nt">W</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)$/);</span>
<a name="l-595"></a>    <span class="nt">q</span> <span class="o">=</span> <span class="nt">date</span><span class="nc">.match</span><span class="o">(/^(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span><span class="nt">-</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span><span class="nt">-</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span><span class="cp">[</span> <span class="nx">T</span><span class="cp">]</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">+):(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)(</span><span class="nt">Z</span><span class="o">|(</span><span class="cp">[</span><span class="o">+-</span><span class="cp">]</span><span class="o">)(</span><span class="err">\</span><span class="nt">d</span><span class="err">\</span><span class="nt">d</span><span class="o">):?(</span><span class="err">\</span><span class="nt">d</span><span class="err">\</span><span class="nt">d</span><span class="o">))?$/);</span>
<a name="l-596"></a>    <span class="nt">r</span> <span class="o">=</span> <span class="nt">date</span><span class="nc">.match</span><span class="o">(/^(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span><span class="nt">-</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span><span class="nt">-</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">+)</span><span class="cp">[</span> <span class="nx">T</span><span class="cp">]</span><span class="o">(</span><span class="err">\</span><span class="nt">d</span><span class="o">+):(</span><span class="err">\</span><span class="nt">d</span><span class="o">+):(</span><span class="err">\</span><span class="nt">d</span><span class="o">+(</span><span class="err">\</span><span class="o">.</span><span class="err">\</span><span class="nt">d</span><span class="o">+)?)(</span><span class="nt">Z</span><span class="o">|(</span><span class="cp">[</span><span class="o">+-</span><span class="cp">]</span><span class="o">)(</span><span class="err">\</span><span class="nt">d</span><span class="err">\</span><span class="nt">d</span><span class="o">):?(</span><span class="err">\</span><span class="nt">d</span><span class="err">\</span><span class="nt">d</span><span class="o">))?$/);</span>
<a name="l-597"></a>    <span class="nt">if</span> <span class="o">(</span><span class="nt">m</span><span class="o">)</span> <span class="p">{</span>
<a name="l-598"></a>      <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">parseInt</span><span class="p">(</span><span class="n">m</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">m</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span> <span class="o">*</span> <span class="m">3</span> <span class="o">-</span> <span class="m">1</span><span class="o">,</span> <span class="m">1</span><span class="p">)</span><span class="o">.</span><span class="n">getTime</span><span class="p">();</span>
<a name="l-599"></a>    <span class="p">}</span> <span class="nt">else</span> <span class="nt">if</span> <span class="o">(</span><span class="nt">n</span><span class="o">)</span> <span class="p">{</span>
<a name="l-600"></a>      <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">parseInt</span><span class="p">(</span><span class="n">n</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">n</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span> <span class="o">-</span> <span class="m">1</span><span class="o">,</span> <span class="m">1</span><span class="p">)</span><span class="o">.</span><span class="n">getTime</span><span class="p">();</span>
<a name="l-601"></a>    <span class="p">}</span> <span class="nt">else</span> <span class="nt">if</span> <span class="o">(</span><span class="nt">o</span><span class="o">)</span> <span class="p">{</span>
<a name="l-602"></a>      <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">parseInt</span><span class="p">(</span><span class="n">o</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">o</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span> <span class="o">-</span> <span class="m">1</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">o</span><span class="cp">[</span><span class="mi">3</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">))</span><span class="o">.</span><span class="n">getTime</span><span class="p">();</span>
<a name="l-603"></a>    <span class="p">}</span> <span class="nt">else</span> <span class="nt">if</span> <span class="o">(</span><span class="nt">p</span><span class="o">)</span> <span class="p">{</span>
<a name="l-604"></a>      <span class="n">ret</span> <span class="o">=</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">parseInt</span><span class="p">(</span><span class="n">p</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="m">0</span><span class="o">,</span> <span class="m">1</span><span class="p">);</span>
<a name="l-605"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">ret</span><span class="o">.</span><span class="n">getDay</span><span class="p">()</span> <span class="o">!==</span> <span class="m">4</span><span class="p">)</span> <span class="err">{</span>
<a name="l-606"></a>        <span class="n">ret</span><span class="o">.</span><span class="n">setMonth</span><span class="p">(</span><span class="m">0</span><span class="o">,</span> <span class="m">1</span> <span class="o">+</span> <span class="p">((</span><span class="m">4</span> <span class="o">-</span> <span class="n">ret</span><span class="o">.</span><span class="n">getDay</span><span class="p">())</span> <span class="o">+</span> <span class="m">7</span><span class="p">)</span> <span class="o">%</span> <span class="m">7</span><span class="p">);</span>
<a name="l-607"></a>      <span class="p">}</span>
<a name="l-608"></a>      <span class="nt">return</span> <span class="nt">ret</span><span class="nc">.getTime</span><span class="o">()</span> <span class="o">+</span> <span class="nt">parseInt</span><span class="o">(</span><span class="nt">p</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">)</span> <span class="o">*</span> <span class="nt">604800000</span><span class="o">;</span>
<a name="l-609"></a>    <span class="err">}</span> <span class="nt">else</span> <span class="nt">if</span> <span class="o">(</span><span class="nt">q</span><span class="o">)</span> <span class="p">{</span>
<a name="l-610"></a>      <span class="n">if</span> <span class="p">(</span><span class="o">!</span><span class="n">q</span><span class="cp">[</span><span class="mi">6</span><span class="cp">]</span><span class="p">)</span> <span class="err">{</span>
<a name="l-611"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">parseInt</span><span class="p">(</span><span class="n">q</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">q</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span> <span class="o">-</span> <span class="m">1</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">q</span><span class="cp">[</span><span class="mi">3</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">q</span><span class="cp">[</span><span class="mi">4</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">q</span><span class="cp">[</span><span class="mi">5</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">))</span><span class="o">.</span><span class="n">getTime</span><span class="p">();</span>
<a name="l-612"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-613"></a>        <span class="n">offsetmins</span> <span class="o">=</span> <span class="m">0</span><span class="p">;</span>
<a name="l-614"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">q</span><span class="cp">[</span><span class="mi">6</span><span class="cp">]</span> <span class="o">!==</span> <span class="s1">&#39;Z&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-615"></a>          <span class="n">offsetmins</span> <span class="o">=</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">q</span><span class="cp">[</span><span class="mi">8</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span> <span class="o">*</span> <span class="m">60</span> <span class="o">+</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">q</span><span class="cp">[</span><span class="mi">9</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">);</span>
<a name="l-616"></a>          <span class="n">if</span> <span class="p">(</span><span class="n">q</span><span class="cp">[</span><span class="mi">7</span><span class="cp">]</span> <span class="o">===</span> <span class="s1">&#39;+&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-617"></a>            <span class="n">offsetmins</span> <span class="o">=</span> <span class="m">0</span> <span class="o">-</span> <span class="n">offsetmins</span><span class="p">;</span>
<a name="l-618"></a>          <span class="p">}</span>
<a name="l-619"></a>        <span class="err">}</span>
<a name="l-620"></a>        <span class="nt">return</span> <span class="nt">Date</span><span class="nc">.UTC</span><span class="o">(</span><span class="nt">parseInt</span><span class="o">(</span><span class="nt">q</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">),</span> <span class="nt">parseInt</span><span class="o">(</span><span class="nt">q</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">)</span> <span class="nt">-</span> <span class="nt">1</span><span class="o">,</span> <span class="nt">parseInt</span><span class="o">(</span><span class="nt">q</span><span class="cp">[</span><span class="mi">3</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">),</span> <span class="nt">parseInt</span><span class="o">(</span><span class="nt">q</span><span class="cp">[</span><span class="mi">4</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">),</span> <span class="nt">parseInt</span><span class="o">(</span><span class="nt">q</span><span class="cp">[</span><span class="mi">5</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">)</span> <span class="o">+</span> <span class="nt">offsetmins</span><span class="o">);</span>
<a name="l-621"></a>      <span class="err">}</span>
<a name="l-622"></a>    <span class="err">}</span> <span class="nt">else</span> <span class="nt">if</span> <span class="o">(</span><span class="nt">r</span><span class="o">)</span> <span class="p">{</span>
<a name="l-623"></a>      <span class="n">secs</span> <span class="o">=</span> <span class="n">parseFloat</span><span class="p">(</span><span class="n">r</span><span class="cp">[</span><span class="mi">6</span><span class="cp">]</span><span class="p">);</span>
<a name="l-624"></a>      <span class="n">isecs</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">floor</span><span class="p">(</span><span class="n">secs</span><span class="p">);</span>
<a name="l-625"></a>      <span class="n">msecs</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">round</span><span class="p">((</span><span class="n">secs</span> <span class="o">-</span> <span class="n">isecs</span><span class="p">)</span> <span class="o">*</span> <span class="m">1000</span><span class="p">);</span>
<a name="l-626"></a>      <span class="n">if</span> <span class="p">(</span><span class="o">!</span><span class="n">r</span><span class="cp">[</span><span class="mi">8</span><span class="cp">]</span><span class="p">)</span> <span class="err">{</span>
<a name="l-627"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">parseInt</span><span class="p">(</span><span class="n">r</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">r</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span> <span class="o">-</span> <span class="m">1</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">r</span><span class="cp">[</span><span class="mi">3</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">r</span><span class="cp">[</span><span class="mi">4</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">r</span><span class="cp">[</span><span class="mi">5</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="n">isecs</span><span class="o">,</span> <span class="n">msecs</span><span class="p">)</span><span class="o">.</span><span class="n">getTime</span><span class="p">();</span>
<a name="l-628"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-629"></a>        <span class="n">offsetmins</span> <span class="o">=</span> <span class="m">0</span><span class="p">;</span>
<a name="l-630"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">r</span><span class="cp">[</span><span class="mi">8</span><span class="cp">]</span> <span class="o">!==</span> <span class="s1">&#39;Z&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-631"></a>          <span class="n">offsetmins</span> <span class="o">=</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">r</span><span class="cp">[</span><span class="mi">10</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span> <span class="o">*</span> <span class="m">60</span> <span class="o">+</span> <span class="n">parseInt</span><span class="p">(</span><span class="n">r</span><span class="cp">[</span><span class="mi">11</span><span class="cp">]</span><span class="o">,</span> <span class="m">10</span><span class="p">);</span>
<a name="l-632"></a>          <span class="n">if</span> <span class="p">(</span><span class="n">r</span><span class="cp">[</span><span class="mi">9</span><span class="cp">]</span> <span class="o">===</span> <span class="s1">&#39;+&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-633"></a>            <span class="n">offsetmins</span> <span class="o">=</span> <span class="m">0</span> <span class="o">-</span> <span class="n">offsetmins</span><span class="p">;</span>
<a name="l-634"></a>          <span class="p">}</span>
<a name="l-635"></a>        <span class="err">}</span>
<a name="l-636"></a>        <span class="nt">return</span> <span class="nt">Date</span><span class="nc">.UTC</span><span class="o">(</span><span class="nt">parseInt</span><span class="o">(</span><span class="nt">r</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">),</span> <span class="nt">parseInt</span><span class="o">(</span><span class="nt">r</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">)</span> <span class="nt">-</span> <span class="nt">1</span><span class="o">,</span> <span class="nt">parseInt</span><span class="o">(</span><span class="nt">r</span><span class="cp">[</span><span class="mi">3</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">),</span> <span class="nt">parseInt</span><span class="o">(</span><span class="nt">r</span><span class="cp">[</span><span class="mi">4</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">),</span> <span class="nt">parseInt</span><span class="o">(</span><span class="nt">r</span><span class="cp">[</span><span class="mi">5</span><span class="cp">]</span><span class="o">,</span> <span class="nt">10</span><span class="o">)</span> <span class="o">+</span> <span class="nt">offsetmins</span><span class="o">,</span> <span class="nt">isecs</span><span class="o">,</span> <span class="nt">msecs</span><span class="o">);</span>
<a name="l-637"></a>      <span class="err">}</span>
<a name="l-638"></a>    <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-639"></a>      <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">parseInt</span><span class="p">(</span><span class="n">date</span><span class="o">,</span> <span class="m">10</span><span class="p">)</span><span class="o">,</span> <span class="m">0</span><span class="o">,</span> <span class="m">1</span><span class="p">)</span><span class="o">.</span><span class="n">getTime</span><span class="p">();</span>
<a name="l-640"></a>    <span class="p">}</span>
<a name="l-641"></a>  <span class="err">}</span><span class="o">;</span>
<a name="l-642"></a>
<a name="l-643"></a>  <span class="nt">Morris</span><span class="nc">.Hover</span> <span class="o">=</span> <span class="o">(</span><span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-644"></a>    <span class="n">Hover</span><span class="o">.</span><span class="n">defaults</span> <span class="o">=</span> <span class="err">{</span>
<a name="l-645"></a>      <span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s1">&#39;morris-hover morris-default-style&#39;</span>
<a name="l-646"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-647"></a>
<a name="l-648"></a>    <span class="nt">function</span> <span class="nt">Hover</span><span class="o">(</span><span class="nt">options</span><span class="o">)</span> <span class="p">{</span>
<a name="l-649"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">options</span> <span class="o">==</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-650"></a>        <span class="n">options</span> <span class="o">=</span> <span class="err">{</span><span class="p">}</span><span class="o">;</span>
<a name="l-651"></a>      <span class="err">}</span>
<a name="l-652"></a>      <span class="nt">this</span><span class="nc">.options</span> <span class="o">=</span> <span class="o">$</span><span class="nc">.extend</span><span class="o">(</span><span class="p">{}</span><span class="o">,</span> <span class="nt">Morris</span><span class="nc">.Hover.defaults</span><span class="o">,</span> <span class="nt">options</span><span class="o">);</span>
<a name="l-653"></a>      <span class="nt">this</span><span class="nc">.el</span> <span class="o">=</span> <span class="o">$(</span><span class="s2">&quot;&lt;div class=&#39;&quot;</span> <span class="o">+</span> <span class="nt">this</span><span class="nc">.options</span><span class="cp">[</span><span class="s2">&quot;class&quot;</span><span class="cp">]</span> <span class="o">+</span> <span class="s2">&quot;&#39;&gt;&lt;/div&gt;&quot;</span><span class="o">);</span>
<a name="l-654"></a>      <span class="nt">this</span><span class="nc">.el.hide</span><span class="o">();</span>
<a name="l-655"></a>      <span class="nt">this</span><span class="nc">.options.parent.append</span><span class="o">(</span><span class="nt">this</span><span class="nc">.el</span><span class="o">);</span>
<a name="l-656"></a>    <span class="err">}</span>
<a name="l-657"></a>
<a name="l-658"></a>    <span class="nt">Hover</span><span class="nc">.prototype.update</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">html</span><span class="o">,</span> <span class="nt">x</span><span class="o">,</span> <span class="nt">y</span><span class="o">)</span> <span class="p">{</span>
<a name="l-659"></a>      <span class="n">this</span><span class="o">.</span><span class="n">html</span><span class="p">(</span><span class="n">html</span><span class="p">);</span>
<a name="l-660"></a>      <span class="n">this</span><span class="o">.</span><span class="nb">show</span><span class="p">();</span>
<a name="l-661"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">moveTo</span><span class="p">(</span><span class="n">x</span><span class="o">,</span> <span class="n">y</span><span class="p">);</span>
<a name="l-662"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-663"></a>
<a name="l-664"></a>    <span class="nt">Hover</span><span class="nc">.prototype.html</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">content</span><span class="o">)</span> <span class="p">{</span>
<a name="l-665"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="n">html</span><span class="p">(</span><span class="nb">content</span><span class="p">);</span>
<a name="l-666"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-667"></a>
<a name="l-668"></a>    <span class="nt">Hover</span><span class="nc">.prototype.moveTo</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">,</span> <span class="nt">y</span><span class="o">)</span> <span class="p">{</span>
<a name="l-669"></a>      <span class="n">var</span> <span class="n">hoverHeight</span><span class="o">,</span> <span class="n">hoverWidth</span><span class="o">,</span> <span class="nb">left</span><span class="o">,</span> <span class="n">parentHeight</span><span class="o">,</span> <span class="n">parentWidth</span><span class="o">,</span> <span class="nb">top</span><span class="p">;</span>
<a name="l-670"></a>      <span class="n">parentWidth</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">parent</span><span class="o">.</span><span class="n">innerWidth</span><span class="p">();</span>
<a name="l-671"></a>      <span class="n">parentHeight</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">parent</span><span class="o">.</span><span class="n">innerHeight</span><span class="p">();</span>
<a name="l-672"></a>      <span class="n">hoverWidth</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="n">outerWidth</span><span class="p">();</span>
<a name="l-673"></a>      <span class="n">hoverHeight</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="n">outerHeight</span><span class="p">();</span>
<a name="l-674"></a>      <span class="nb">left</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">Math</span><span class="o">.</span><span class="n">max</span><span class="p">(</span><span class="m">0</span><span class="o">,</span> <span class="n">x</span> <span class="o">-</span> <span class="n">hoverWidth</span> <span class="o">/</span> <span class="m">2</span><span class="p">)</span><span class="o">,</span> <span class="n">parentWidth</span> <span class="o">-</span> <span class="n">hoverWidth</span><span class="p">);</span>
<a name="l-675"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">y</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-676"></a>        <span class="nb">top</span> <span class="o">=</span> <span class="n">y</span> <span class="o">-</span> <span class="n">hoverHeight</span> <span class="o">-</span> <span class="m">10</span><span class="p">;</span>
<a name="l-677"></a>        <span class="n">if</span> <span class="p">(</span><span class="nb">top</span> <span class="o">&lt;</span> <span class="m">0</span><span class="p">)</span> <span class="err">{</span>
<a name="l-678"></a>          <span class="nb">top</span> <span class="o">=</span> <span class="n">y</span> <span class="o">+</span> <span class="m">10</span><span class="p">;</span>
<a name="l-679"></a>          <span class="n">if</span> <span class="p">(</span><span class="nb">top</span> <span class="o">+</span> <span class="n">hoverHeight</span> <span class="o">&gt;</span> <span class="n">parentHeight</span><span class="p">)</span> <span class="err">{</span>
<a name="l-680"></a>            <span class="nb">top</span> <span class="o">=</span> <span class="n">parentHeight</span> <span class="o">/</span> <span class="m">2</span> <span class="o">-</span> <span class="n">hoverHeight</span> <span class="o">/</span> <span class="m">2</span><span class="p">;</span>
<a name="l-681"></a>          <span class="p">}</span>
<a name="l-682"></a>        <span class="err">}</span>
<a name="l-683"></a>      <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-684"></a>        <span class="nb">top</span> <span class="o">=</span> <span class="n">parentHeight</span> <span class="o">/</span> <span class="m">2</span> <span class="o">-</span> <span class="n">hoverHeight</span> <span class="o">/</span> <span class="m">2</span><span class="p">;</span>
<a name="l-685"></a>      <span class="p">}</span>
<a name="l-686"></a>      <span class="nt">return</span> <span class="nt">this</span><span class="nc">.el.css</span><span class="o">(</span><span class="p">{</span>
<a name="l-687"></a>        <span class="nb">left</span><span class="o">:</span> <span class="nb">left</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="o">,</span>
<a name="l-688"></a>        <span class="nb">top</span><span class="o">:</span> <span class="n">parseInt</span><span class="p">(</span><span class="nb">top</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span>
<a name="l-689"></a>      <span class="p">}</span><span class="o">);</span>
<a name="l-690"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-691"></a>
<a name="l-692"></a>    <span class="nt">Hover</span><span class="nc">.prototype.show</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-693"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">show</span><span class="p">();</span>
<a name="l-694"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-695"></a>
<a name="l-696"></a>    <span class="nt">Hover</span><span class="nc">.prototype.hide</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-697"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">hide</span><span class="p">();</span>
<a name="l-698"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-699"></a>
<a name="l-700"></a>    <span class="nt">return</span> <span class="nt">Hover</span><span class="o">;</span>
<a name="l-701"></a>
<a name="l-702"></a>  <span class="err">}</span><span class="o">)();</span>
<a name="l-703"></a>
<a name="l-704"></a>  <span class="nt">Morris</span><span class="nc">.Line</span> <span class="o">=</span> <span class="o">(</span><span class="nt">function</span><span class="o">(</span><span class="nt">_super</span><span class="o">)</span> <span class="p">{</span>
<a name="l-705"></a>    <span class="n">__extends</span><span class="p">(</span><span class="n">Line</span><span class="o">,</span> <span class="n">_super</span><span class="p">);</span>
<a name="l-706"></a>
<a name="l-707"></a>    <span class="n">function</span> <span class="n">Line</span><span class="p">(</span><span class="n">options</span><span class="p">)</span> <span class="err">{</span>
<a name="l-708"></a>      <span class="n">this</span><span class="o">.</span><span class="n">hilight</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">hilight</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-709"></a>      <span class="n">this</span><span class="o">.</span><span class="n">onHoverOut</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">onHoverOut</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-710"></a>      <span class="n">this</span><span class="o">.</span><span class="n">onHoverMove</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">onHoverMove</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-711"></a>      <span class="n">this</span><span class="o">.</span><span class="n">onGridClick</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">onGridClick</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-712"></a>      <span class="n">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="n">this</span> <span class="n">instanceof</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Line</span><span class="p">))</span> <span class="err">{</span>
<a name="l-713"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Line</span><span class="p">(</span><span class="n">options</span><span class="p">);</span>
<a name="l-714"></a>      <span class="p">}</span>
<a name="l-715"></a>      <span class="nt">Line</span><span class="nc">.__super__.constructor.call</span><span class="o">(</span><span class="nt">this</span><span class="o">,</span> <span class="nt">options</span><span class="o">);</span>
<a name="l-716"></a>    <span class="err">}</span>
<a name="l-717"></a>
<a name="l-718"></a>    <span class="nt">Line</span><span class="nc">.prototype.init</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-719"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">hideHover</span> <span class="o">!==</span> <span class="s1">&#39;always&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-720"></a>        <span class="n">this</span><span class="o">.</span><span class="n">hover</span> <span class="o">=</span> <span class="n">new</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Hover</span><span class="p">(</span><span class="err">{</span>
<a name="l-721"></a>          <span class="n">parent</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span>
<a name="l-722"></a>        <span class="p">}</span><span class="o">);</span>
<a name="l-723"></a>        <span class="nt">this</span><span class="nc">.on</span><span class="o">(</span><span class="s1">&#39;hovermove&#39;</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.onHoverMove</span><span class="o">);</span>
<a name="l-724"></a>        <span class="nt">this</span><span class="nc">.on</span><span class="o">(</span><span class="s1">&#39;hoverout&#39;</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.onHoverOut</span><span class="o">);</span>
<a name="l-725"></a>        <span class="nt">return</span> <span class="nt">this</span><span class="nc">.on</span><span class="o">(</span><span class="s1">&#39;gridclick&#39;</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.onGridClick</span><span class="o">);</span>
<a name="l-726"></a>      <span class="err">}</span>
<a name="l-727"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-728"></a>
<a name="l-729"></a>    <span class="nt">Line</span><span class="nc">.prototype.defaults</span> <span class="o">=</span> <span class="p">{</span>
<a name="l-730"></a>      <span class="n">lineWidth</span><span class="o">:</span> <span class="m">3</span><span class="o">,</span>
<a name="l-731"></a>      <span class="n">pointSize</span><span class="o">:</span> <span class="m">4</span><span class="o">,</span>
<a name="l-732"></a>      <span class="n">lineColors</span><span class="o">:</span> <span class="cp">[</span><span class="s1">&#39;#0b62a4&#39;</span><span class="p">,</span> <span class="s1">&#39;#7A92A3&#39;</span><span class="p">,</span> <span class="s1">&#39;#4da74d&#39;</span><span class="p">,</span> <span class="s1">&#39;#afd8f8&#39;</span><span class="p">,</span> <span class="s1">&#39;#edc240&#39;</span><span class="p">,</span> <span class="s1">&#39;#cb4b4b&#39;</span><span class="p">,</span> <span class="s1">&#39;#9440ed&#39;</span><span class="cp">]</span><span class="o">,</span>
<a name="l-733"></a>      <span class="n">pointStrokeWidths</span><span class="o">:</span> <span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span>
<a name="l-734"></a>      <span class="n">pointStrokeColors</span><span class="o">:</span> <span class="cp">[</span><span class="s1">&#39;#ffffff&#39;</span><span class="cp">]</span><span class="o">,</span>
<a name="l-735"></a>      <span class="n">pointFillColors</span><span class="o">:</span> <span class="cp">[]</span><span class="o">,</span>
<a name="l-736"></a>      <span class="n">smooth</span><span class="o">:</span> <span class="n">true</span><span class="o">,</span>
<a name="l-737"></a>      <span class="n">xLabels</span><span class="o">:</span> <span class="s1">&#39;auto&#39;</span><span class="o">,</span>
<a name="l-738"></a>      <span class="n">xLabelFormat</span><span class="o">:</span> <span class="n">null</span><span class="o">,</span>
<a name="l-739"></a>      <span class="n">xLabelMargin</span><span class="o">:</span> <span class="m">24</span><span class="o">,</span>
<a name="l-740"></a>      <span class="n">continuousLine</span><span class="o">:</span> <span class="n">true</span><span class="o">,</span>
<a name="l-741"></a>      <span class="n">hideHover</span><span class="o">:</span> <span class="n">false</span>
<a name="l-742"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-743"></a>
<a name="l-744"></a>    <span class="nt">Line</span><span class="nc">.prototype.calc</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-745"></a>      <span class="n">this</span><span class="o">.</span><span class="n">calcPoints</span><span class="p">();</span>
<a name="l-746"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">generatePaths</span><span class="p">();</span>
<a name="l-747"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-748"></a>
<a name="l-749"></a>    <span class="nt">Line</span><span class="nc">.prototype.calcPoints</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-750"></a>      <span class="n">var</span> <span class="n">row</span><span class="o">,</span> <span class="n">y</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-751"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="p">;</span>
<a name="l-752"></a>      <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-753"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-754"></a>        <span class="n">row</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-755"></a>        <span class="n">row</span><span class="o">.</span><span class="n">_x</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">transX</span><span class="p">(</span><span class="n">row</span><span class="o">.</span><span class="n">x</span><span class="p">);</span>
<a name="l-756"></a>        <span class="n">row</span><span class="o">.</span><span class="n">_y</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-757"></a>          <span class="n">var</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_len1</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_results1</span><span class="p">;</span>
<a name="l-758"></a>          <span class="n">_ref1</span> <span class="o">=</span> <span class="n">row</span><span class="o">.</span><span class="n">y</span><span class="p">;</span>
<a name="l-759"></a>          <span class="n">_results1</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-760"></a>          <span class="n">for</span> <span class="p">(</span><span class="n">_j</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len1</span> <span class="o">=</span> <span class="n">_ref1</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_j</span> <span class="o">&lt;</span> <span class="n">_len1</span><span class="p">;</span> <span class="n">_j</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-761"></a>            <span class="n">y</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="nx">_j</span><span class="cp">]</span><span class="p">;</span>
<a name="l-762"></a>            <span class="n">if</span> <span class="p">(</span><span class="n">y</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-763"></a>              <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">transY</span><span class="p">(</span><span class="n">y</span><span class="p">));</span>
<a name="l-764"></a>            <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-765"></a>              <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">y</span><span class="p">);</span>
<a name="l-766"></a>            <span class="p">}</span>
<a name="l-767"></a>          <span class="err">}</span>
<a name="l-768"></a>          <span class="nt">return</span> <span class="nt">_results1</span><span class="o">;</span>
<a name="l-769"></a>        <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-770"></a>        <span class="nt">_results</span><span class="nc">.push</span><span class="o">(</span><span class="nt">row</span><span class="nc">._ymax</span> <span class="o">=</span> <span class="nt">Math</span><span class="nc">.min.apply</span><span class="o">(</span><span class="nt">Math</span><span class="o">,</span> <span class="cp">[</span><span class="nx">this.bottom</span><span class="cp">]</span><span class="nc">.concat</span><span class="o">((</span><span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-771"></a>          <span class="n">var</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_len1</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_results1</span><span class="p">;</span>
<a name="l-772"></a>          <span class="n">_ref1</span> <span class="o">=</span> <span class="n">row</span><span class="o">.</span><span class="n">_y</span><span class="p">;</span>
<a name="l-773"></a>          <span class="n">_results1</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-774"></a>          <span class="n">for</span> <span class="p">(</span><span class="n">_j</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len1</span> <span class="o">=</span> <span class="n">_ref1</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_j</span> <span class="o">&lt;</span> <span class="n">_len1</span><span class="p">;</span> <span class="n">_j</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-775"></a>            <span class="n">y</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="nx">_j</span><span class="cp">]</span><span class="p">;</span>
<a name="l-776"></a>            <span class="n">if</span> <span class="p">(</span><span class="n">y</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-777"></a>              <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">y</span><span class="p">);</span>
<a name="l-778"></a>            <span class="p">}</span>
<a name="l-779"></a>          <span class="err">}</span>
<a name="l-780"></a>          <span class="nt">return</span> <span class="nt">_results1</span><span class="o">;</span>
<a name="l-781"></a>        <span class="err">}</span><span class="o">)())));</span>
<a name="l-782"></a>      <span class="err">}</span>
<a name="l-783"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-784"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-785"></a>
<a name="l-786"></a>    <span class="nt">Line</span><span class="nc">.prototype.hitTest</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">)</span> <span class="p">{</span>
<a name="l-787"></a>      <span class="n">var</span> <span class="n">index</span><span class="o">,</span> <span class="n">r</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-788"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">length</span> <span class="o">===</span> <span class="m">0</span><span class="p">)</span> <span class="err">{</span>
<a name="l-789"></a>        <span class="n">return</span> <span class="n">null</span><span class="p">;</span>
<a name="l-790"></a>      <span class="p">}</span>
<a name="l-791"></a>      <span class="nt">_ref</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.data.slice</span><span class="o">(</span><span class="nt">1</span><span class="o">);</span>
<a name="l-792"></a>      <span class="nt">for</span> <span class="o">(</span><span class="nt">index</span> <span class="o">=</span> <span class="nt">_i</span> <span class="o">=</span> <span class="nt">0</span><span class="o">,</span> <span class="nt">_len</span> <span class="o">=</span> <span class="nt">_ref</span><span class="nc">.length</span><span class="o">;</span> <span class="nt">_i</span> <span class="o">&lt;</span> <span class="nt">_len</span><span class="o">;</span> <span class="nt">index</span> <span class="o">=</span> <span class="o">++</span><span class="nt">_i</span><span class="o">)</span> <span class="p">{</span>
<a name="l-793"></a>        <span class="n">r</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="p">;</span>
<a name="l-794"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">x</span> <span class="o">&lt;</span> <span class="p">(</span><span class="n">r</span><span class="o">.</span><span class="n">_x</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="o">.</span><span class="n">_x</span><span class="p">)</span> <span class="o">/</span> <span class="m">2</span><span class="p">)</span> <span class="err">{</span>
<a name="l-795"></a>          <span class="n">break</span><span class="p">;</span>
<a name="l-796"></a>        <span class="p">}</span>
<a name="l-797"></a>      <span class="err">}</span>
<a name="l-798"></a>      <span class="nt">return</span> <span class="nt">index</span><span class="o">;</span>
<a name="l-799"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-800"></a>
<a name="l-801"></a>    <span class="nt">Line</span><span class="nc">.prototype.onGridClick</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">,</span> <span class="nt">y</span><span class="o">)</span> <span class="p">{</span>
<a name="l-802"></a>      <span class="n">var</span> <span class="n">index</span><span class="p">;</span>
<a name="l-803"></a>      <span class="n">index</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">hitTest</span><span class="p">(</span><span class="n">x</span><span class="p">);</span>
<a name="l-804"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">fire</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="o">,</span> <span class="n">index</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="o">.</span><span class="n">src</span><span class="o">,</span> <span class="n">x</span><span class="o">,</span> <span class="n">y</span><span class="p">);</span>
<a name="l-805"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-806"></a>
<a name="l-807"></a>    <span class="nt">Line</span><span class="nc">.prototype.onHoverMove</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">,</span> <span class="nt">y</span><span class="o">)</span> <span class="p">{</span>
<a name="l-808"></a>      <span class="n">var</span> <span class="n">index</span><span class="p">;</span>
<a name="l-809"></a>      <span class="n">index</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">hitTest</span><span class="p">(</span><span class="n">x</span><span class="p">);</span>
<a name="l-810"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">displayHoverForRow</span><span class="p">(</span><span class="n">index</span><span class="p">);</span>
<a name="l-811"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-812"></a>
<a name="l-813"></a>    <span class="nt">Line</span><span class="nc">.prototype.onHoverOut</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-814"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">hideHover</span> <span class="o">!==</span> <span class="n">false</span><span class="p">)</span> <span class="err">{</span>
<a name="l-815"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">displayHoverForRow</span><span class="p">(</span><span class="n">null</span><span class="p">);</span>
<a name="l-816"></a>      <span class="p">}</span>
<a name="l-817"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-818"></a>
<a name="l-819"></a>    <span class="nt">Line</span><span class="nc">.prototype.displayHoverForRow</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-820"></a>      <span class="n">var</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-821"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">index</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-822"></a>        <span class="p">(</span><span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">hover</span><span class="p">)</span><span class="o">.</span><span class="n">update</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">_ref</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">hoverContentForRow</span><span class="p">(</span><span class="n">index</span><span class="p">));</span>
<a name="l-823"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">hilight</span><span class="p">(</span><span class="n">index</span><span class="p">);</span>
<a name="l-824"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-825"></a>        <span class="n">this</span><span class="o">.</span><span class="n">hover</span><span class="o">.</span><span class="nb">hide</span><span class="p">();</span>
<a name="l-826"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">hilight</span><span class="p">();</span>
<a name="l-827"></a>      <span class="p">}</span>
<a name="l-828"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-829"></a>
<a name="l-830"></a>    <span class="nt">Line</span><span class="nc">.prototype.hoverContentForRow</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-831"></a>      <span class="n">var</span> <span class="nb">content</span><span class="o">,</span> <span class="n">j</span><span class="o">,</span> <span class="n">row</span><span class="o">,</span> <span class="n">y</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-832"></a>      <span class="n">row</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="p">;</span>
<a name="l-833"></a>      <span class="nb">content</span> <span class="o">=</span> <span class="s2">&quot;&lt;div class=&#39;morris-hover-row-label&#39;&gt;&quot;</span> <span class="o">+</span> <span class="n">row</span><span class="o">.</span><span class="n">label</span> <span class="o">+</span> <span class="s2">&quot;&lt;/div&gt;&quot;</span><span class="p">;</span>
<a name="l-834"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">row</span><span class="o">.</span><span class="n">y</span><span class="p">;</span>
<a name="l-835"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">j</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">j</span> <span class="o">=</span> <span class="o">++</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-836"></a>        <span class="n">y</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">j</span><span class="cp">]</span><span class="p">;</span>
<a name="l-837"></a>        <span class="nb">content</span> <span class="o">+=</span> <span class="s2">&quot;&lt;div class=&#39;morris-hover-point&#39; style=&#39;color: &quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">colorFor</span><span class="p">(</span><span class="n">row</span><span class="o">,</span> <span class="n">j</span><span class="o">,</span> <span class="s1">&#39;label&#39;</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;&#39;&gt;\n  &quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">labels</span><span class="cp">[</span><span class="nx">j</span><span class="cp">]</span> <span class="o">+</span> <span class="s2">&quot;:\n  &quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">yLabelFormat</span><span class="p">(</span><span class="n">y</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;\n&lt;/div&gt;&quot;</span><span class="p">;</span>
<a name="l-838"></a>      <span class="p">}</span>
<a name="l-839"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">typeof</span> <span class="nt">this</span><span class="nc">.options.hoverCallback</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="o">)</span> <span class="p">{</span>
<a name="l-840"></a>        <span class="nb">content</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">hoverCallback</span><span class="p">(</span><span class="n">index</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">,</span> <span class="nb">content</span><span class="o">,</span> <span class="n">row</span><span class="o">.</span><span class="n">src</span><span class="p">);</span>
<a name="l-841"></a>      <span class="p">}</span>
<a name="l-842"></a>      <span class="nt">return</span> <span class="cp">[</span><span class="nx">content</span><span class="p">,</span> <span class="nx">row._x</span><span class="p">,</span> <span class="nx">row._ymax</span><span class="cp">]</span><span class="o">;</span>
<a name="l-843"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-844"></a>
<a name="l-845"></a>    <span class="nt">Line</span><span class="nc">.prototype.generatePaths</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-846"></a>      <span class="n">var</span> <span class="n">c</span><span class="o">,</span> <span class="n">coords</span><span class="o">,</span> <span class="n">i</span><span class="o">,</span> <span class="n">r</span><span class="o">,</span> <span class="n">smooth</span><span class="p">;</span>
<a name="l-847"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">paths</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-848"></a>        <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-849"></a>        <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-850"></a>        <span class="n">for</span> <span class="p">(</span><span class="n">i</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">ykeys</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref</span> <span class="o">?</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_ref</span> <span class="o">:</span> <span class="n">_i</span> <span class="o">&gt;</span> <span class="n">_ref</span><span class="p">;</span> <span class="n">i</span> <span class="o">=</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref</span> <span class="o">?</span> <span class="o">++</span><span class="n">_i</span> <span class="o">:</span> <span class="o">--</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-851"></a>          <span class="n">smooth</span> <span class="o">=</span> <span class="n">typeof</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">smooth</span> <span class="o">===</span> <span class="s2">&quot;boolean&quot;</span> <span class="o">?</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">smooth</span> <span class="o">:</span> <span class="p">(</span><span class="n">_ref1</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">ykeys</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span><span class="o">,</span> <span class="n">__indexOf</span><span class="o">.</span><span class="n">call</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">smooth</span><span class="o">,</span> <span class="n">_ref1</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="m">0</span><span class="p">);</span>
<a name="l-852"></a>          <span class="n">coords</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-853"></a>            <span class="n">var</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref2</span><span class="o">,</span> <span class="n">_results1</span><span class="p">;</span>
<a name="l-854"></a>            <span class="n">_ref2</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="p">;</span>
<a name="l-855"></a>            <span class="n">_results1</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-856"></a>            <span class="n">for</span> <span class="p">(</span><span class="n">_j</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref2</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_j</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_j</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-857"></a>              <span class="n">r</span> <span class="o">=</span> <span class="n">_ref2</span><span class="cp">[</span><span class="nx">_j</span><span class="cp">]</span><span class="p">;</span>
<a name="l-858"></a>              <span class="n">if</span> <span class="p">(</span><span class="n">r</span><span class="o">.</span><span class="n">_y</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span> <span class="o">!==</span> <span class="n">void</span> <span class="m">0</span><span class="p">)</span> <span class="err">{</span>
<a name="l-859"></a>                <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="err">{</span>
<a name="l-860"></a>                  <span class="n">x</span><span class="o">:</span> <span class="n">r</span><span class="o">.</span><span class="n">_x</span><span class="o">,</span>
<a name="l-861"></a>                  <span class="n">y</span><span class="o">:</span> <span class="n">r</span><span class="o">.</span><span class="n">_y</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span>
<a name="l-862"></a>                <span class="p">}</span><span class="o">);</span>
<a name="l-863"></a>              <span class="err">}</span>
<a name="l-864"></a>            <span class="err">}</span>
<a name="l-865"></a>            <span class="nt">return</span> <span class="nt">_results1</span><span class="o">;</span>
<a name="l-866"></a>          <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-867"></a>          <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.continuousLine</span><span class="o">)</span> <span class="p">{</span>
<a name="l-868"></a>            <span class="n">coords</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-869"></a>              <span class="n">var</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_results1</span><span class="p">;</span>
<a name="l-870"></a>              <span class="n">_results1</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-871"></a>              <span class="n">for</span> <span class="p">(</span><span class="n">_j</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">coords</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_j</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_j</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-872"></a>                <span class="n">c</span> <span class="o">=</span> <span class="n">coords</span><span class="cp">[</span><span class="nx">_j</span><span class="cp">]</span><span class="p">;</span>
<a name="l-873"></a>                <span class="n">if</span> <span class="p">(</span><span class="n">c</span><span class="o">.</span><span class="n">y</span> <span class="o">!==</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-874"></a>                  <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">c</span><span class="p">);</span>
<a name="l-875"></a>                <span class="p">}</span>
<a name="l-876"></a>              <span class="err">}</span>
<a name="l-877"></a>              <span class="nt">return</span> <span class="nt">_results1</span><span class="o">;</span>
<a name="l-878"></a>            <span class="err">}</span><span class="o">)();</span>
<a name="l-879"></a>          <span class="err">}</span>
<a name="l-880"></a>          <span class="nt">if</span> <span class="o">(</span><span class="nt">coords</span><span class="nc">.length</span> <span class="o">&gt;</span> <span class="nt">1</span><span class="o">)</span> <span class="p">{</span>
<a name="l-881"></a>            <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">Line</span><span class="o">.</span><span class="n">createPath</span><span class="p">(</span><span class="n">coords</span><span class="o">,</span> <span class="n">smooth</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="nb">bottom</span><span class="p">));</span>
<a name="l-882"></a>          <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-883"></a>            <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">null</span><span class="p">);</span>
<a name="l-884"></a>          <span class="p">}</span>
<a name="l-885"></a>        <span class="err">}</span>
<a name="l-886"></a>        <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-887"></a>      <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-888"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-889"></a>
<a name="l-890"></a>    <span class="nt">Line</span><span class="nc">.prototype.draw</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-891"></a>      <span class="n">var</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-892"></a>      <span class="n">if</span> <span class="p">((</span><span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">axes</span><span class="p">)</span> <span class="o">===</span> <span class="n">true</span> <span class="o">||</span> <span class="n">_ref</span> <span class="o">===</span> <span class="s1">&#39;both&#39;</span> <span class="o">||</span> <span class="n">_ref</span> <span class="o">===</span> <span class="s1">&#39;x&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-893"></a>        <span class="n">this</span><span class="o">.</span><span class="n">drawXAxis</span><span class="p">();</span>
<a name="l-894"></a>      <span class="p">}</span>
<a name="l-895"></a>      <span class="nt">this</span><span class="nc">.drawSeries</span><span class="o">();</span>
<a name="l-896"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.hideHover</span> <span class="o">===</span> <span class="nt">false</span><span class="o">)</span> <span class="p">{</span>
<a name="l-897"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">displayHoverForRow</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">length</span> <span class="o">-</span> <span class="m">1</span><span class="p">);</span>
<a name="l-898"></a>      <span class="p">}</span>
<a name="l-899"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-900"></a>
<a name="l-901"></a>    <span class="nt">Line</span><span class="nc">.prototype.drawXAxis</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-902"></a>      <span class="n">var</span> <span class="n">drawLabel</span><span class="o">,</span> <span class="n">l</span><span class="o">,</span> <span class="n">labels</span><span class="o">,</span> <span class="n">prevAngleMargin</span><span class="o">,</span> <span class="n">prevLabelMargin</span><span class="o">,</span> <span class="n">row</span><span class="o">,</span> <span class="n">ypos</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_results</span><span class="o">,</span>
<a name="l-903"></a>        <span class="n">_this</span> <span class="o">=</span> <span class="n">this</span><span class="p">;</span>
<a name="l-904"></a>      <span class="n">ypos</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="nb">bottom</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="nb">padding</span> <span class="o">/</span> <span class="m">2</span><span class="p">;</span>
<a name="l-905"></a>      <span class="n">prevLabelMargin</span> <span class="o">=</span> <span class="n">null</span><span class="p">;</span>
<a name="l-906"></a>      <span class="n">prevAngleMargin</span> <span class="o">=</span> <span class="n">null</span><span class="p">;</span>
<a name="l-907"></a>      <span class="n">drawLabel</span> <span class="o">=</span> <span class="n">function</span><span class="p">(</span><span class="n">labelText</span><span class="o">,</span> <span class="n">xpos</span><span class="p">)</span> <span class="err">{</span>
<a name="l-908"></a>        <span class="n">var</span> <span class="n">label</span><span class="o">,</span> <span class="n">labelBox</span><span class="o">,</span> <span class="nb">margin</span><span class="o">,</span> <span class="n">offset</span><span class="o">,</span> <span class="n">textBox</span><span class="p">;</span>
<a name="l-909"></a>        <span class="n">label</span> <span class="o">=</span> <span class="n">_this</span><span class="o">.</span><span class="n">drawXAxisLabel</span><span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">transX</span><span class="p">(</span><span class="n">xpos</span><span class="p">)</span><span class="o">,</span> <span class="n">ypos</span><span class="o">,</span> <span class="n">labelText</span><span class="p">);</span>
<a name="l-910"></a>        <span class="n">textBox</span> <span class="o">=</span> <span class="n">label</span><span class="o">.</span><span class="n">getBBox</span><span class="p">();</span>
<a name="l-911"></a>        <span class="n">label</span><span class="o">.</span><span class="n">transform</span><span class="p">(</span><span class="s2">&quot;r&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="o">-</span><span class="n">_this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span><span class="p">));</span>
<a name="l-912"></a>        <span class="n">labelBox</span> <span class="o">=</span> <span class="n">label</span><span class="o">.</span><span class="n">getBBox</span><span class="p">();</span>
<a name="l-913"></a>        <span class="n">label</span><span class="o">.</span><span class="n">transform</span><span class="p">(</span><span class="s2">&quot;t0,&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">labelBox</span><span class="o">.</span><span class="nb">height</span> <span class="o">/</span> <span class="m">2</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;...&quot;</span><span class="p">);</span>
<a name="l-914"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span> <span class="o">!==</span> <span class="m">0</span><span class="p">)</span> <span class="err">{</span>
<a name="l-915"></a>          <span class="n">offset</span> <span class="o">=</span> <span class="m">-0</span><span class="o">.</span><span class="m">5</span> <span class="o">*</span> <span class="n">textBox</span><span class="o">.</span><span class="nb">width</span> <span class="o">*</span> <span class="n">Math</span><span class="o">.</span><span class="n">cos</span><span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span> <span class="o">*</span> <span class="n">Math</span><span class="o">.</span><span class="n">PI</span> <span class="o">/</span> <span class="m">180</span><span class="o">.</span><span class="m">0</span><span class="p">);</span>
<a name="l-916"></a>          <span class="n">label</span><span class="o">.</span><span class="n">transform</span><span class="p">(</span><span class="s2">&quot;t&quot;</span> <span class="o">+</span> <span class="n">offset</span> <span class="o">+</span> <span class="s2">&quot;,0...&quot;</span><span class="p">);</span>
<a name="l-917"></a>        <span class="p">}</span>
<a name="l-918"></a>        <span class="nt">labelBox</span> <span class="o">=</span> <span class="nt">label</span><span class="nc">.getBBox</span><span class="o">();</span>
<a name="l-919"></a>        <span class="nt">if</span> <span class="o">(((</span><span class="nt">prevLabelMargin</span> <span class="o">==</span> <span class="nt">null</span><span class="o">)</span> <span class="o">||</span> <span class="nt">prevLabelMargin</span> <span class="o">&gt;=</span> <span class="nt">labelBox</span><span class="nc">.x</span> <span class="o">+</span> <span class="nt">labelBox</span><span class="nc">.width</span> <span class="o">||</span> <span class="o">(</span><span class="nt">prevAngleMargin</span> <span class="o">!=</span> <span class="nt">null</span><span class="o">)</span> <span class="o">&amp;&amp;</span> <span class="nt">prevAngleMargin</span> <span class="o">&gt;=</span> <span class="nt">labelBox</span><span class="nc">.x</span><span class="o">)</span> <span class="o">&amp;&amp;</span> <span class="nt">labelBox</span><span class="nc">.x</span> <span class="o">&gt;=</span> <span class="nt">0</span> <span class="o">&amp;&amp;</span> <span class="o">(</span><span class="nt">labelBox</span><span class="nc">.x</span> <span class="o">+</span> <span class="nt">labelBox</span><span class="nc">.width</span><span class="o">)</span> <span class="o">&lt;</span> <span class="nt">_this</span><span class="nc">.el.width</span><span class="o">())</span> <span class="p">{</span>
<a name="l-920"></a>          <span class="n">if</span> <span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span> <span class="o">!==</span> <span class="m">0</span><span class="p">)</span> <span class="err">{</span>
<a name="l-921"></a>            <span class="nb">margin</span> <span class="o">=</span> <span class="m">1</span><span class="o">.</span><span class="m">25</span> <span class="o">*</span> <span class="n">_this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextSize</span> <span class="o">/</span> <span class="n">Math</span><span class="o">.</span><span class="n">sin</span><span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span> <span class="o">*</span> <span class="n">Math</span><span class="o">.</span><span class="n">PI</span> <span class="o">/</span> <span class="m">180</span><span class="o">.</span><span class="m">0</span><span class="p">);</span>
<a name="l-922"></a>            <span class="n">prevAngleMargin</span> <span class="o">=</span> <span class="n">labelBox</span><span class="o">.</span><span class="n">x</span> <span class="o">-</span> <span class="nb">margin</span><span class="p">;</span>
<a name="l-923"></a>          <span class="p">}</span>
<a name="l-924"></a>          <span class="nt">return</span> <span class="nt">prevLabelMargin</span> <span class="o">=</span> <span class="nt">labelBox</span><span class="nc">.x</span> <span class="nt">-</span> <span class="nt">_this</span><span class="nc">.options.xLabelMargin</span><span class="o">;</span>
<a name="l-925"></a>        <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-926"></a>          <span class="n">return</span> <span class="n">label</span><span class="o">.</span><span class="n">remove</span><span class="p">();</span>
<a name="l-927"></a>        <span class="p">}</span>
<a name="l-928"></a>      <span class="err">}</span><span class="o">;</span>
<a name="l-929"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.parseTime</span><span class="o">)</span> <span class="p">{</span>
<a name="l-930"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">length</span> <span class="o">===</span> <span class="m">1</span> <span class="o">&amp;&amp;</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabels</span> <span class="o">===</span> <span class="s1">&#39;auto&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-931"></a>          <span class="n">labels</span> <span class="o">=</span> <span class="cp">[</span><span class="err">[</span><span class="nx">this.data</span><span class="err">[</span><span class="mi">0</span><span class="cp">]</span><span class="o">.</span><span class="n">label</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="o">.</span><span class="n">x</span><span class="p">]];</span>
<a name="l-932"></a>        <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-933"></a>          <span class="n">labels</span> <span class="o">=</span> <span class="n">Morris</span><span class="o">.</span><span class="n">labelSeries</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">xmin</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">xmax</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="nb">width</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabels</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelFormat</span><span class="p">);</span>
<a name="l-934"></a>        <span class="p">}</span>
<a name="l-935"></a>      <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-936"></a>        <span class="n">labels</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-937"></a>          <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-938"></a>          <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="p">;</span>
<a name="l-939"></a>          <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-940"></a>          <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-941"></a>            <span class="n">row</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-942"></a>            <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="cp">[</span><span class="nx">row.label</span><span class="p">,</span> <span class="nx">row.x</span><span class="cp">]</span><span class="p">);</span>
<a name="l-943"></a>          <span class="p">}</span>
<a name="l-944"></a>          <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-945"></a>        <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-946"></a>      <span class="err">}</span>
<a name="l-947"></a>      <span class="nt">labels</span><span class="nc">.reverse</span><span class="o">();</span>
<a name="l-948"></a>      <span class="nt">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="o">;</span>
<a name="l-949"></a>      <span class="nt">for</span> <span class="o">(</span><span class="nt">_i</span> <span class="o">=</span> <span class="nt">0</span><span class="o">,</span> <span class="nt">_len</span> <span class="o">=</span> <span class="nt">labels</span><span class="nc">.length</span><span class="o">;</span> <span class="nt">_i</span> <span class="o">&lt;</span> <span class="nt">_len</span><span class="o">;</span> <span class="nt">_i</span><span class="o">++)</span> <span class="p">{</span>
<a name="l-950"></a>        <span class="n">l</span> <span class="o">=</span> <span class="n">labels</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-951"></a>        <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">drawLabel</span><span class="p">(</span><span class="n">l</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="o">,</span> <span class="n">l</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="p">));</span>
<a name="l-952"></a>      <span class="p">}</span>
<a name="l-953"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-954"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-955"></a>
<a name="l-956"></a>    <span class="nt">Line</span><span class="nc">.prototype.drawSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-957"></a>      <span class="n">var</span> <span class="n">i</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-958"></a>      <span class="n">this</span><span class="o">.</span><span class="n">seriesPoints</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-959"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">i</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">ykeys</span><span class="o">.</span><span class="n">length</span> <span class="o">-</span> <span class="m">1</span><span class="p">;</span> <span class="n">_ref</span> <span class="o">&lt;=</span> <span class="m">0</span> <span class="o">?</span> <span class="n">_i</span> <span class="o">&lt;=</span> <span class="m">0</span> <span class="o">:</span> <span class="n">_i</span> <span class="o">&gt;=</span> <span class="m">0</span><span class="p">;</span> <span class="n">i</span> <span class="o">=</span> <span class="n">_ref</span> <span class="o">&lt;=</span> <span class="m">0</span> <span class="o">?</span> <span class="o">++</span><span class="n">_i</span> <span class="o">:</span> <span class="o">--</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-960"></a>        <span class="n">this</span><span class="o">.</span><span class="n">_drawLineFor</span><span class="p">(</span><span class="n">i</span><span class="p">);</span>
<a name="l-961"></a>      <span class="p">}</span>
<a name="l-962"></a>      <span class="nt">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="o">;</span>
<a name="l-963"></a>      <span class="nt">for</span> <span class="o">(</span><span class="nt">i</span> <span class="o">=</span> <span class="nt">_j</span> <span class="o">=</span> <span class="nt">_ref1</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.options.ykeys.length</span> <span class="nt">-</span> <span class="nt">1</span><span class="o">;</span> <span class="nt">_ref1</span> <span class="o">&lt;=</span> <span class="nt">0</span> <span class="o">?</span> <span class="nt">_j</span> <span class="o">&lt;=</span> <span class="nt">0</span> <span class="o">:</span> <span class="nt">_j</span> <span class="o">&gt;=</span> <span class="nt">0</span><span class="o">;</span> <span class="nt">i</span> <span class="o">=</span> <span class="nt">_ref1</span> <span class="o">&lt;=</span> <span class="nt">0</span> <span class="o">?</span> <span class="o">++</span><span class="nt">_j</span> <span class="o">:</span> <span class="nt">--_j</span><span class="o">)</span> <span class="p">{</span>
<a name="l-964"></a>        <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">_drawPointFor</span><span class="p">(</span><span class="n">i</span><span class="p">));</span>
<a name="l-965"></a>      <span class="p">}</span>
<a name="l-966"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-967"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-968"></a>
<a name="l-969"></a>    <span class="nt">Line</span><span class="nc">.prototype._drawPointFor</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-970"></a>      <span class="n">var</span> <span class="nb">circle</span><span class="o">,</span> <span class="n">row</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-971"></a>      <span class="n">this</span><span class="o">.</span><span class="n">seriesPoints</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-972"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="p">;</span>
<a name="l-973"></a>      <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-974"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-975"></a>        <span class="n">row</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-976"></a>        <span class="nb">circle</span> <span class="o">=</span> <span class="n">null</span><span class="p">;</span>
<a name="l-977"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">row</span><span class="o">.</span><span class="n">_y</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-978"></a>          <span class="nb">circle</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">drawLinePoint</span><span class="p">(</span><span class="n">row</span><span class="o">.</span><span class="n">_x</span><span class="o">,</span> <span class="n">row</span><span class="o">.</span><span class="n">_y</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">colorFor</span><span class="p">(</span><span class="n">row</span><span class="o">,</span> <span class="n">index</span><span class="o">,</span> <span class="s1">&#39;point&#39;</span><span class="p">)</span><span class="o">,</span> <span class="n">index</span><span class="p">);</span>
<a name="l-979"></a>        <span class="p">}</span>
<a name="l-980"></a>        <span class="nt">_results</span><span class="nc">.push</span><span class="o">(</span><span class="nt">this</span><span class="nc">.seriesPoints</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="nc">.push</span><span class="o">(</span><span class="nt">circle</span><span class="o">));</span>
<a name="l-981"></a>      <span class="err">}</span>
<a name="l-982"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-983"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-984"></a>
<a name="l-985"></a>    <span class="nt">Line</span><span class="nc">.prototype._drawLineFor</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-986"></a>      <span class="n">var</span> <span class="n">path</span><span class="p">;</span>
<a name="l-987"></a>      <span class="n">path</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">paths</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="p">;</span>
<a name="l-988"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">path</span> <span class="o">!==</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-989"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">drawLinePath</span><span class="p">(</span><span class="n">path</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">colorFor</span><span class="p">(</span><span class="n">null</span><span class="o">,</span> <span class="n">index</span><span class="o">,</span> <span class="s1">&#39;line&#39;</span><span class="p">)</span><span class="o">,</span> <span class="n">index</span><span class="p">);</span>
<a name="l-990"></a>      <span class="p">}</span>
<a name="l-991"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-992"></a>
<a name="l-993"></a>    <span class="nt">Line</span><span class="nc">.createPath</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">coords</span><span class="o">,</span> <span class="nt">smooth</span><span class="o">,</span> <span class="nt">bottom</span><span class="o">)</span> <span class="p">{</span>
<a name="l-994"></a>      <span class="n">var</span> <span class="n">coord</span><span class="o">,</span> <span class="n">g</span><span class="o">,</span> <span class="n">grads</span><span class="o">,</span> <span class="n">i</span><span class="o">,</span> <span class="n">ix</span><span class="o">,</span> <span class="n">lg</span><span class="o">,</span> <span class="n">path</span><span class="o">,</span> <span class="n">prevCoord</span><span class="o">,</span> <span class="n">x1</span><span class="o">,</span> <span class="n">x2</span><span class="o">,</span> <span class="n">y1</span><span class="o">,</span> <span class="n">y2</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="p">;</span>
<a name="l-995"></a>      <span class="n">path</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
<a name="l-996"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">smooth</span><span class="p">)</span> <span class="err">{</span>
<a name="l-997"></a>        <span class="n">grads</span> <span class="o">=</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Line</span><span class="o">.</span><span class="n">gradients</span><span class="p">(</span><span class="n">coords</span><span class="p">);</span>
<a name="l-998"></a>      <span class="p">}</span>
<a name="l-999"></a>      <span class="nt">prevCoord</span> <span class="o">=</span> <span class="p">{</span>
<a name="l-1000"></a>        <span class="n">y</span><span class="o">:</span> <span class="n">null</span>
<a name="l-1001"></a>      <span class="p">}</span><span class="o">;</span>
<a name="l-1002"></a>      <span class="nt">for</span> <span class="o">(</span><span class="nt">i</span> <span class="o">=</span> <span class="nt">_i</span> <span class="o">=</span> <span class="nt">0</span><span class="o">,</span> <span class="nt">_len</span> <span class="o">=</span> <span class="nt">coords</span><span class="nc">.length</span><span class="o">;</span> <span class="nt">_i</span> <span class="o">&lt;</span> <span class="nt">_len</span><span class="o">;</span> <span class="nt">i</span> <span class="o">=</span> <span class="o">++</span><span class="nt">_i</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1003"></a>        <span class="n">coord</span> <span class="o">=</span> <span class="n">coords</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1004"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">coord</span><span class="o">.</span><span class="n">y</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1005"></a>          <span class="n">if</span> <span class="p">(</span><span class="n">prevCoord</span><span class="o">.</span><span class="n">y</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1006"></a>            <span class="n">if</span> <span class="p">(</span><span class="n">smooth</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1007"></a>              <span class="n">g</span> <span class="o">=</span> <span class="n">grads</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1008"></a>              <span class="n">lg</span> <span class="o">=</span> <span class="n">grads</span><span class="cp">[</span><span class="nx">i</span> <span class="o">-</span> <span class="mi">1</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1009"></a>              <span class="n">ix</span> <span class="o">=</span> <span class="p">(</span><span class="n">coord</span><span class="o">.</span><span class="n">x</span> <span class="o">-</span> <span class="n">prevCoord</span><span class="o">.</span><span class="n">x</span><span class="p">)</span> <span class="o">/</span> <span class="m">4</span><span class="p">;</span>
<a name="l-1010"></a>              <span class="n">x1</span> <span class="o">=</span> <span class="n">prevCoord</span><span class="o">.</span><span class="n">x</span> <span class="o">+</span> <span class="n">ix</span><span class="p">;</span>
<a name="l-1011"></a>              <span class="n">y1</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="nb">bottom</span><span class="o">,</span> <span class="n">prevCoord</span><span class="o">.</span><span class="n">y</span> <span class="o">+</span> <span class="n">ix</span> <span class="o">*</span> <span class="n">lg</span><span class="p">);</span>
<a name="l-1012"></a>              <span class="n">x2</span> <span class="o">=</span> <span class="n">coord</span><span class="o">.</span><span class="n">x</span> <span class="o">-</span> <span class="n">ix</span><span class="p">;</span>
<a name="l-1013"></a>              <span class="n">y2</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="nb">bottom</span><span class="o">,</span> <span class="n">coord</span><span class="o">.</span><span class="n">y</span> <span class="o">-</span> <span class="n">ix</span> <span class="o">*</span> <span class="n">g</span><span class="p">);</span>
<a name="l-1014"></a>              <span class="n">path</span> <span class="o">+=</span> <span class="s2">&quot;C&quot;</span> <span class="o">+</span> <span class="n">x1</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">y1</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">x2</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">y2</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">coord</span><span class="o">.</span><span class="n">x</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">coord</span><span class="o">.</span><span class="n">y</span><span class="p">;</span>
<a name="l-1015"></a>            <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1016"></a>              <span class="n">path</span> <span class="o">+=</span> <span class="s2">&quot;L&quot;</span> <span class="o">+</span> <span class="n">coord</span><span class="o">.</span><span class="n">x</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">coord</span><span class="o">.</span><span class="n">y</span><span class="p">;</span>
<a name="l-1017"></a>            <span class="p">}</span>
<a name="l-1018"></a>          <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1019"></a>            <span class="n">if</span> <span class="p">(</span><span class="o">!</span><span class="n">smooth</span> <span class="o">||</span> <span class="p">(</span><span class="n">grads</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span> <span class="o">!=</span> <span class="n">null</span><span class="p">))</span> <span class="err">{</span>
<a name="l-1020"></a>              <span class="n">path</span> <span class="o">+=</span> <span class="s2">&quot;M&quot;</span> <span class="o">+</span> <span class="n">coord</span><span class="o">.</span><span class="n">x</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">coord</span><span class="o">.</span><span class="n">y</span><span class="p">;</span>
<a name="l-1021"></a>            <span class="p">}</span>
<a name="l-1022"></a>          <span class="err">}</span>
<a name="l-1023"></a>        <span class="err">}</span>
<a name="l-1024"></a>        <span class="nt">prevCoord</span> <span class="o">=</span> <span class="nt">coord</span><span class="o">;</span>
<a name="l-1025"></a>      <span class="err">}</span>
<a name="l-1026"></a>      <span class="nt">return</span> <span class="nt">path</span><span class="o">;</span>
<a name="l-1027"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1028"></a>
<a name="l-1029"></a>    <span class="nt">Line</span><span class="nc">.gradients</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">coords</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1030"></a>      <span class="n">var</span> <span class="n">coord</span><span class="o">,</span> <span class="n">grad</span><span class="o">,</span> <span class="n">i</span><span class="o">,</span> <span class="n">nextCoord</span><span class="o">,</span> <span class="n">prevCoord</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-1031"></a>      <span class="n">grad</span> <span class="o">=</span> <span class="n">function</span><span class="p">(</span><span class="n">a</span><span class="o">,</span> <span class="n">b</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1032"></a>        <span class="n">return</span> <span class="p">(</span><span class="n">a</span><span class="o">.</span><span class="n">y</span> <span class="o">-</span> <span class="n">b</span><span class="o">.</span><span class="n">y</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="n">a</span><span class="o">.</span><span class="n">x</span> <span class="o">-</span> <span class="n">b</span><span class="o">.</span><span class="n">x</span><span class="p">);</span>
<a name="l-1033"></a>      <span class="p">}</span><span class="o">;</span>
<a name="l-1034"></a>      <span class="nt">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="o">;</span>
<a name="l-1035"></a>      <span class="nt">for</span> <span class="o">(</span><span class="nt">i</span> <span class="o">=</span> <span class="nt">_i</span> <span class="o">=</span> <span class="nt">0</span><span class="o">,</span> <span class="nt">_len</span> <span class="o">=</span> <span class="nt">coords</span><span class="nc">.length</span><span class="o">;</span> <span class="nt">_i</span> <span class="o">&lt;</span> <span class="nt">_len</span><span class="o">;</span> <span class="nt">i</span> <span class="o">=</span> <span class="o">++</span><span class="nt">_i</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1036"></a>        <span class="n">coord</span> <span class="o">=</span> <span class="n">coords</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1037"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">coord</span><span class="o">.</span><span class="n">y</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1038"></a>          <span class="n">nextCoord</span> <span class="o">=</span> <span class="n">coords</span><span class="cp">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="cp">]</span> <span class="o">||</span> <span class="err">{</span>
<a name="l-1039"></a>            <span class="n">y</span><span class="o">:</span> <span class="n">null</span>
<a name="l-1040"></a>          <span class="p">}</span><span class="o">;</span>
<a name="l-1041"></a>          <span class="nt">prevCoord</span> <span class="o">=</span> <span class="nt">coords</span><span class="cp">[</span><span class="nx">i</span> <span class="o">-</span> <span class="mi">1</span><span class="cp">]</span> <span class="o">||</span> <span class="p">{</span>
<a name="l-1042"></a>            <span class="n">y</span><span class="o">:</span> <span class="n">null</span>
<a name="l-1043"></a>          <span class="p">}</span><span class="o">;</span>
<a name="l-1044"></a>          <span class="nt">if</span> <span class="o">((</span><span class="nt">prevCoord</span><span class="nc">.y</span> <span class="o">!=</span> <span class="nt">null</span><span class="o">)</span> <span class="o">&amp;&amp;</span> <span class="o">(</span><span class="nt">nextCoord</span><span class="nc">.y</span> <span class="o">!=</span> <span class="nt">null</span><span class="o">))</span> <span class="p">{</span>
<a name="l-1045"></a>            <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">grad</span><span class="p">(</span><span class="n">prevCoord</span><span class="o">,</span> <span class="n">nextCoord</span><span class="p">));</span>
<a name="l-1046"></a>          <span class="p">}</span> <span class="nt">else</span> <span class="nt">if</span> <span class="o">(</span><span class="nt">prevCoord</span><span class="nc">.y</span> <span class="o">!=</span> <span class="nt">null</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1047"></a>            <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">grad</span><span class="p">(</span><span class="n">prevCoord</span><span class="o">,</span> <span class="n">coord</span><span class="p">));</span>
<a name="l-1048"></a>          <span class="p">}</span> <span class="nt">else</span> <span class="nt">if</span> <span class="o">(</span><span class="nt">nextCoord</span><span class="nc">.y</span> <span class="o">!=</span> <span class="nt">null</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1049"></a>            <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">grad</span><span class="p">(</span><span class="n">coord</span><span class="o">,</span> <span class="n">nextCoord</span><span class="p">));</span>
<a name="l-1050"></a>          <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1051"></a>            <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">null</span><span class="p">);</span>
<a name="l-1052"></a>          <span class="p">}</span>
<a name="l-1053"></a>        <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1054"></a>          <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">null</span><span class="p">);</span>
<a name="l-1055"></a>        <span class="p">}</span>
<a name="l-1056"></a>      <span class="err">}</span>
<a name="l-1057"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-1058"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1059"></a>
<a name="l-1060"></a>    <span class="nt">Line</span><span class="nc">.prototype.hilight</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1061"></a>      <span class="n">var</span> <span class="n">i</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_ref1</span><span class="p">;</span>
<a name="l-1062"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">prevHilight</span> <span class="o">!==</span> <span class="n">null</span> <span class="o">&amp;&amp;</span> <span class="n">this</span><span class="o">.</span><span class="n">prevHilight</span> <span class="o">!==</span> <span class="n">index</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1063"></a>        <span class="n">for</span> <span class="p">(</span><span class="n">i</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">seriesPoints</span><span class="o">.</span><span class="n">length</span> <span class="o">-</span> <span class="m">1</span><span class="p">;</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref</span> <span class="o">?</span> <span class="n">_i</span> <span class="o">&lt;=</span> <span class="n">_ref</span> <span class="o">:</span> <span class="n">_i</span> <span class="o">&gt;=</span> <span class="n">_ref</span><span class="p">;</span> <span class="n">i</span> <span class="o">=</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref</span> <span class="o">?</span> <span class="o">++</span><span class="n">_i</span> <span class="o">:</span> <span class="o">--</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1064"></a>          <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">seriesPoints</span><span class="cp">[</span><span class="nx">i</span><span class="cp">][</span><span class="nx">this.prevHilight</span><span class="cp">]</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1065"></a>            <span class="n">this</span><span class="o">.</span><span class="n">seriesPoints</span><span class="cp">[</span><span class="nx">i</span><span class="cp">][</span><span class="nx">this.prevHilight</span><span class="cp">]</span><span class="o">.</span><span class="n">animate</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">pointShrinkSeries</span><span class="p">(</span><span class="n">i</span><span class="p">));</span>
<a name="l-1066"></a>          <span class="p">}</span>
<a name="l-1067"></a>        <span class="err">}</span>
<a name="l-1068"></a>      <span class="err">}</span>
<a name="l-1069"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">index</span> <span class="o">!==</span> <span class="nt">null</span> <span class="o">&amp;&amp;</span> <span class="nt">this</span><span class="nc">.prevHilight</span> <span class="o">!==</span> <span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1070"></a>        <span class="n">for</span> <span class="p">(</span><span class="n">i</span> <span class="o">=</span> <span class="n">_j</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_ref1</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">seriesPoints</span><span class="o">.</span><span class="n">length</span> <span class="o">-</span> <span class="m">1</span><span class="p">;</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref1</span> <span class="o">?</span> <span class="n">_j</span> <span class="o">&lt;=</span> <span class="n">_ref1</span> <span class="o">:</span> <span class="n">_j</span> <span class="o">&gt;=</span> <span class="n">_ref1</span><span class="p">;</span> <span class="n">i</span> <span class="o">=</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref1</span> <span class="o">?</span> <span class="o">++</span><span class="n">_j</span> <span class="o">:</span> <span class="o">--</span><span class="n">_j</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1071"></a>          <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">seriesPoints</span><span class="cp">[</span><span class="nx">i</span><span class="cp">][</span><span class="nx">index</span><span class="cp">]</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1072"></a>            <span class="n">this</span><span class="o">.</span><span class="n">seriesPoints</span><span class="cp">[</span><span class="nx">i</span><span class="cp">][</span><span class="nx">index</span><span class="cp">]</span><span class="o">.</span><span class="n">animate</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">pointGrowSeries</span><span class="p">(</span><span class="n">i</span><span class="p">));</span>
<a name="l-1073"></a>          <span class="p">}</span>
<a name="l-1074"></a>        <span class="err">}</span>
<a name="l-1075"></a>      <span class="err">}</span>
<a name="l-1076"></a>      <span class="nt">return</span> <span class="nt">this</span><span class="nc">.prevHilight</span> <span class="o">=</span> <span class="nt">index</span><span class="o">;</span>
<a name="l-1077"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1078"></a>
<a name="l-1079"></a>    <span class="nt">Line</span><span class="nc">.prototype.colorFor</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">row</span><span class="o">,</span> <span class="nt">sidx</span><span class="o">,</span> <span class="nt">type</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1080"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">typeof</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">lineColors</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1081"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">lineColors</span><span class="o">.</span><span class="n">call</span><span class="p">(</span><span class="n">this</span><span class="o">,</span> <span class="n">row</span><span class="o">,</span> <span class="n">sidx</span><span class="o">,</span> <span class="n">type</span><span class="p">);</span>
<a name="l-1082"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="nt">if</span> <span class="o">(</span><span class="nt">type</span> <span class="o">===</span> <span class="s1">&#39;point&#39;</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1083"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">pointFillColors</span><span class="cp">[</span><span class="nx">sidx</span> <span class="o">%</span> <span class="nx">this.options.pointFillColors.length</span><span class="cp">]</span> <span class="o">||</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">lineColors</span><span class="cp">[</span><span class="nx">sidx</span> <span class="o">%</span> <span class="nx">this.options.lineColors.length</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1084"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1085"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">lineColors</span><span class="cp">[</span><span class="nx">sidx</span> <span class="o">%</span> <span class="nx">this.options.lineColors.length</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1086"></a>      <span class="p">}</span>
<a name="l-1087"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1088"></a>
<a name="l-1089"></a>    <span class="nt">Line</span><span class="nc">.prototype.drawXAxisLabel</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">xPos</span><span class="o">,</span> <span class="nt">yPos</span><span class="o">,</span> <span class="nt">text</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1090"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="nb">text</span><span class="p">(</span><span class="n">xPos</span><span class="o">,</span> <span class="n">yPos</span><span class="o">,</span> <span class="nb">text</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-size&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextSize</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-family&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextFamily</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-weight&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextWeight</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;fill&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextColor</span><span class="p">);</span>
<a name="l-1091"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1092"></a>
<a name="l-1093"></a>    <span class="nt">Line</span><span class="nc">.prototype.drawLinePath</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">path</span><span class="o">,</span> <span class="nt">lineColor</span><span class="o">,</span> <span class="nt">lineIndex</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1094"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">path</span><span class="p">(</span><span class="n">path</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke&#39;</span><span class="o">,</span> <span class="n">lineColor</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke-width&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">lineWidthForSeries</span><span class="p">(</span><span class="n">lineIndex</span><span class="p">));</span>
<a name="l-1095"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1096"></a>
<a name="l-1097"></a>    <span class="nt">Line</span><span class="nc">.prototype.drawLinePoint</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">xPos</span><span class="o">,</span> <span class="nt">yPos</span><span class="o">,</span> <span class="nt">pointColor</span><span class="o">,</span> <span class="nt">lineIndex</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1098"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="nb">circle</span><span class="p">(</span><span class="n">xPos</span><span class="o">,</span> <span class="n">yPos</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">pointSizeForSeries</span><span class="p">(</span><span class="n">lineIndex</span><span class="p">))</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;fill&#39;</span><span class="o">,</span> <span class="n">pointColor</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke-width&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">pointStrokeWidthForSeries</span><span class="p">(</span><span class="n">lineIndex</span><span class="p">))</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">pointStrokeColorForSeries</span><span class="p">(</span><span class="n">lineIndex</span><span class="p">));</span>
<a name="l-1099"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1100"></a>
<a name="l-1101"></a>    <span class="nt">Line</span><span class="nc">.prototype.pointStrokeWidthForSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1102"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">pointStrokeWidths</span><span class="cp">[</span><span class="nx">index</span> <span class="o">%</span> <span class="nx">this.options.pointStrokeWidths.length</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1103"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1104"></a>
<a name="l-1105"></a>    <span class="nt">Line</span><span class="nc">.prototype.pointStrokeColorForSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1106"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">pointStrokeColors</span><span class="cp">[</span><span class="nx">index</span> <span class="o">%</span> <span class="nx">this.options.pointStrokeColors.length</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1107"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1108"></a>
<a name="l-1109"></a>    <span class="nt">Line</span><span class="nc">.prototype.lineWidthForSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1110"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">lineWidth</span> <span class="n">instanceof</span> <span class="n">Array</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1111"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">lineWidth</span><span class="cp">[</span><span class="nx">index</span> <span class="o">%</span> <span class="nx">this.options.lineWidth.length</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1112"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1113"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">lineWidth</span><span class="p">;</span>
<a name="l-1114"></a>      <span class="p">}</span>
<a name="l-1115"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1116"></a>
<a name="l-1117"></a>    <span class="nt">Line</span><span class="nc">.prototype.pointSizeForSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1118"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">pointSize</span> <span class="n">instanceof</span> <span class="n">Array</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1119"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">pointSize</span><span class="cp">[</span><span class="nx">index</span> <span class="o">%</span> <span class="nx">this.options.pointSize.length</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1120"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1121"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">pointSize</span><span class="p">;</span>
<a name="l-1122"></a>      <span class="p">}</span>
<a name="l-1123"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1124"></a>
<a name="l-1125"></a>    <span class="nt">Line</span><span class="nc">.prototype.pointGrowSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1126"></a>      <span class="n">return</span> <span class="n">Raphael</span><span class="o">.</span><span class="n">animation</span><span class="p">(</span><span class="err">{</span>
<a name="l-1127"></a>        <span class="n">r</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">pointSizeForSeries</span><span class="p">(</span><span class="n">index</span><span class="p">)</span> <span class="o">+</span> <span class="m">3</span>
<a name="l-1128"></a>      <span class="p">}</span><span class="o">,</span> <span class="nt">25</span><span class="o">,</span> <span class="s1">&#39;linear&#39;</span><span class="o">);</span>
<a name="l-1129"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1130"></a>
<a name="l-1131"></a>    <span class="nt">Line</span><span class="nc">.prototype.pointShrinkSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1132"></a>      <span class="n">return</span> <span class="n">Raphael</span><span class="o">.</span><span class="n">animation</span><span class="p">(</span><span class="err">{</span>
<a name="l-1133"></a>        <span class="n">r</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">pointSizeForSeries</span><span class="p">(</span><span class="n">index</span><span class="p">)</span>
<a name="l-1134"></a>      <span class="p">}</span><span class="o">,</span> <span class="nt">25</span><span class="o">,</span> <span class="s1">&#39;linear&#39;</span><span class="o">);</span>
<a name="l-1135"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1136"></a>
<a name="l-1137"></a>    <span class="nt">return</span> <span class="nt">Line</span><span class="o">;</span>
<a name="l-1138"></a>
<a name="l-1139"></a>  <span class="err">}</span><span class="o">)(</span><span class="nt">Morris</span><span class="nc">.Grid</span><span class="o">);</span>
<a name="l-1140"></a>
<a name="l-1141"></a>  <span class="nt">Morris</span><span class="nc">.labelSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">dmin</span><span class="o">,</span> <span class="nt">dmax</span><span class="o">,</span> <span class="nt">pxwidth</span><span class="o">,</span> <span class="nt">specName</span><span class="o">,</span> <span class="nt">xLabelFormat</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1142"></a>    <span class="n">var</span> <span class="n">d</span><span class="o">,</span> <span class="n">d0</span><span class="o">,</span> <span class="n">ddensity</span><span class="o">,</span> <span class="n">name</span><span class="o">,</span> <span class="n">ret</span><span class="o">,</span> <span class="n">s</span><span class="o">,</span> <span class="n">spec</span><span class="o">,</span> <span class="n">t</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-1143"></a>    <span class="n">ddensity</span> <span class="o">=</span> <span class="m">200</span> <span class="o">*</span> <span class="p">(</span><span class="n">dmax</span> <span class="o">-</span> <span class="n">dmin</span><span class="p">)</span> <span class="o">/</span> <span class="n">pxwidth</span><span class="p">;</span>
<a name="l-1144"></a>    <span class="n">d0</span> <span class="o">=</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">dmin</span><span class="p">);</span>
<a name="l-1145"></a>    <span class="n">spec</span> <span class="o">=</span> <span class="n">Morris</span><span class="o">.</span><span class="n">LABEL_SPECS</span><span class="cp">[</span><span class="nx">specName</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1146"></a>    <span class="n">if</span> <span class="p">(</span><span class="n">spec</span> <span class="o">===</span> <span class="n">void</span> <span class="m">0</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1147"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">Morris</span><span class="o">.</span><span class="n">AUTO_LABEL_ORDER</span><span class="p">;</span>
<a name="l-1148"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1149"></a>        <span class="n">name</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1150"></a>        <span class="n">s</span> <span class="o">=</span> <span class="n">Morris</span><span class="o">.</span><span class="n">LABEL_SPECS</span><span class="cp">[</span><span class="nx">name</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1151"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">ddensity</span> <span class="o">&gt;=</span> <span class="n">s</span><span class="o">.</span><span class="n">span</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1152"></a>          <span class="n">spec</span> <span class="o">=</span> <span class="n">s</span><span class="p">;</span>
<a name="l-1153"></a>          <span class="n">break</span><span class="p">;</span>
<a name="l-1154"></a>        <span class="p">}</span>
<a name="l-1155"></a>      <span class="err">}</span>
<a name="l-1156"></a>    <span class="err">}</span>
<a name="l-1157"></a>    <span class="nt">if</span> <span class="o">(</span><span class="nt">spec</span> <span class="o">===</span> <span class="nt">void</span> <span class="nt">0</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1158"></a>      <span class="n">spec</span> <span class="o">=</span> <span class="n">Morris</span><span class="o">.</span><span class="n">LABEL_SPECS</span><span class="cp">[</span><span class="s2">&quot;second&quot;</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1159"></a>    <span class="p">}</span>
<a name="l-1160"></a>    <span class="nt">if</span> <span class="o">(</span><span class="nt">xLabelFormat</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1161"></a>      <span class="n">spec</span> <span class="o">=</span> <span class="err">$</span><span class="o">.</span><span class="n">extend</span><span class="p">(</span><span class="err">{</span><span class="p">}</span><span class="o">,</span> <span class="nt">spec</span><span class="o">,</span> <span class="p">{</span>
<a name="l-1162"></a>        <span class="n">fmt</span><span class="o">:</span> <span class="n">xLabelFormat</span>
<a name="l-1163"></a>      <span class="p">}</span><span class="o">);</span>
<a name="l-1164"></a>    <span class="err">}</span>
<a name="l-1165"></a>    <span class="nt">d</span> <span class="o">=</span> <span class="nt">spec</span><span class="nc">.start</span><span class="o">(</span><span class="nt">d0</span><span class="o">);</span>
<a name="l-1166"></a>    <span class="nt">ret</span> <span class="o">=</span> <span class="cp">[]</span><span class="o">;</span>
<a name="l-1167"></a>    <span class="nt">while</span> <span class="o">((</span><span class="nt">t</span> <span class="o">=</span> <span class="nt">d</span><span class="nc">.getTime</span><span class="o">())</span> <span class="o">&lt;=</span> <span class="nt">dmax</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1168"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">t</span> <span class="o">&gt;=</span> <span class="n">dmin</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1169"></a>        <span class="n">ret</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="cp">[</span><span class="nx">spec.fmt</span><span class="p">(</span><span class="nx">d</span><span class="p">),</span> <span class="nx">t</span><span class="cp">]</span><span class="p">);</span>
<a name="l-1170"></a>      <span class="p">}</span>
<a name="l-1171"></a>      <span class="nt">spec</span><span class="nc">.incr</span><span class="o">(</span><span class="nt">d</span><span class="o">);</span>
<a name="l-1172"></a>    <span class="err">}</span>
<a name="l-1173"></a>    <span class="nt">return</span> <span class="nt">ret</span><span class="o">;</span>
<a name="l-1174"></a>  <span class="err">}</span><span class="o">;</span>
<a name="l-1175"></a>
<a name="l-1176"></a>  <span class="nt">minutesSpecHelper</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">interval</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1177"></a>    <span class="n">return</span> <span class="err">{</span>
<a name="l-1178"></a>      <span class="n">span</span><span class="o">:</span> <span class="n">interval</span> <span class="o">*</span> <span class="m">60</span> <span class="o">*</span> <span class="m">1000</span><span class="o">,</span>
<a name="l-1179"></a>      <span class="n">start</span><span class="o">:</span> <span class="n">function</span><span class="p">(</span><span class="n">d</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1180"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getMonth</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getDate</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getHours</span><span class="p">());</span>
<a name="l-1181"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1182"></a>      <span class="nt">fmt</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1183"></a>        <span class="n">return</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">pad2</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getHours</span><span class="p">()))</span> <span class="o">+</span> <span class="s2">&quot;:&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">pad2</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getMinutes</span><span class="p">()));</span>
<a name="l-1184"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1185"></a>      <span class="nt">incr</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1186"></a>        <span class="n">return</span> <span class="n">d</span><span class="o">.</span><span class="n">setUTCMinutes</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getUTCMinutes</span><span class="p">()</span> <span class="o">+</span> <span class="n">interval</span><span class="p">);</span>
<a name="l-1187"></a>      <span class="p">}</span>
<a name="l-1188"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1189"></a>  <span class="err">}</span><span class="o">;</span>
<a name="l-1190"></a>
<a name="l-1191"></a>  <span class="nt">secondsSpecHelper</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">interval</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1192"></a>    <span class="n">return</span> <span class="err">{</span>
<a name="l-1193"></a>      <span class="n">span</span><span class="o">:</span> <span class="n">interval</span> <span class="o">*</span> <span class="m">1000</span><span class="o">,</span>
<a name="l-1194"></a>      <span class="n">start</span><span class="o">:</span> <span class="n">function</span><span class="p">(</span><span class="n">d</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1195"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getMonth</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getDate</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getHours</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getMinutes</span><span class="p">());</span>
<a name="l-1196"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1197"></a>      <span class="nt">fmt</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1198"></a>        <span class="n">return</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">pad2</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getHours</span><span class="p">()))</span> <span class="o">+</span> <span class="s2">&quot;:&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">pad2</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getMinutes</span><span class="p">()))</span> <span class="o">+</span> <span class="s2">&quot;:&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">pad2</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getSeconds</span><span class="p">()));</span>
<a name="l-1199"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1200"></a>      <span class="nt">incr</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1201"></a>        <span class="n">return</span> <span class="n">d</span><span class="o">.</span><span class="n">setUTCSeconds</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getUTCSeconds</span><span class="p">()</span> <span class="o">+</span> <span class="n">interval</span><span class="p">);</span>
<a name="l-1202"></a>      <span class="p">}</span>
<a name="l-1203"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1204"></a>  <span class="err">}</span><span class="o">;</span>
<a name="l-1205"></a>
<a name="l-1206"></a>  <span class="nt">Morris</span><span class="nc">.LABEL_SPECS</span> <span class="o">=</span> <span class="p">{</span>
<a name="l-1207"></a>    <span class="s2">&quot;decade&quot;</span><span class="o">:</span> <span class="err">{</span>
<a name="l-1208"></a>      <span class="n">span</span><span class="o">:</span> <span class="m">172800000000</span><span class="o">,</span>
<a name="l-1209"></a>      <span class="n">start</span><span class="o">:</span> <span class="n">function</span><span class="p">(</span><span class="n">d</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1210"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">()</span> <span class="o">-</span> <span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">()</span> <span class="o">%</span> <span class="m">10</span><span class="o">,</span> <span class="m">0</span><span class="o">,</span> <span class="m">1</span><span class="p">);</span>
<a name="l-1211"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1212"></a>      <span class="nt">fmt</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1213"></a>        <span class="n">return</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">());</span>
<a name="l-1214"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1215"></a>      <span class="nt">incr</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1216"></a>        <span class="n">return</span> <span class="n">d</span><span class="o">.</span><span class="n">setFullYear</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">()</span> <span class="o">+</span> <span class="m">10</span><span class="p">);</span>
<a name="l-1217"></a>      <span class="p">}</span>
<a name="l-1218"></a>    <span class="err">}</span><span class="o">,</span>
<a name="l-1219"></a>    <span class="s2">&quot;year&quot;</span><span class="o">:</span> <span class="p">{</span>
<a name="l-1220"></a>      <span class="n">span</span><span class="o">:</span> <span class="m">17280000000</span><span class="o">,</span>
<a name="l-1221"></a>      <span class="n">start</span><span class="o">:</span> <span class="n">function</span><span class="p">(</span><span class="n">d</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1222"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">()</span><span class="o">,</span> <span class="m">0</span><span class="o">,</span> <span class="m">1</span><span class="p">);</span>
<a name="l-1223"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1224"></a>      <span class="nt">fmt</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1225"></a>        <span class="n">return</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">());</span>
<a name="l-1226"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1227"></a>      <span class="nt">incr</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1228"></a>        <span class="n">return</span> <span class="n">d</span><span class="o">.</span><span class="n">setFullYear</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">()</span> <span class="o">+</span> <span class="m">1</span><span class="p">);</span>
<a name="l-1229"></a>      <span class="p">}</span>
<a name="l-1230"></a>    <span class="err">}</span><span class="o">,</span>
<a name="l-1231"></a>    <span class="s2">&quot;month&quot;</span><span class="o">:</span> <span class="p">{</span>
<a name="l-1232"></a>      <span class="n">span</span><span class="o">:</span> <span class="m">2419200000</span><span class="o">,</span>
<a name="l-1233"></a>      <span class="n">start</span><span class="o">:</span> <span class="n">function</span><span class="p">(</span><span class="n">d</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1234"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getMonth</span><span class="p">()</span><span class="o">,</span> <span class="m">1</span><span class="p">);</span>
<a name="l-1235"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1236"></a>      <span class="nt">fmt</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1237"></a>        <span class="n">return</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">())</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">pad2</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getMonth</span><span class="p">()</span> <span class="o">+</span> <span class="m">1</span><span class="p">));</span>
<a name="l-1238"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1239"></a>      <span class="nt">incr</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1240"></a>        <span class="n">return</span> <span class="n">d</span><span class="o">.</span><span class="n">setMonth</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getMonth</span><span class="p">()</span> <span class="o">+</span> <span class="m">1</span><span class="p">);</span>
<a name="l-1241"></a>      <span class="p">}</span>
<a name="l-1242"></a>    <span class="err">}</span><span class="o">,</span>
<a name="l-1243"></a>    <span class="s2">&quot;week&quot;</span><span class="o">:</span> <span class="p">{</span>
<a name="l-1244"></a>      <span class="n">span</span><span class="o">:</span> <span class="m">604800000</span><span class="o">,</span>
<a name="l-1245"></a>      <span class="n">start</span><span class="o">:</span> <span class="n">function</span><span class="p">(</span><span class="n">d</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1246"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getMonth</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getDate</span><span class="p">());</span>
<a name="l-1247"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1248"></a>      <span class="nt">fmt</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1249"></a>        <span class="n">return</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">())</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">pad2</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getMonth</span><span class="p">()</span> <span class="o">+</span> <span class="m">1</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">pad2</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getDate</span><span class="p">()));</span>
<a name="l-1250"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1251"></a>      <span class="nt">incr</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1252"></a>        <span class="n">return</span> <span class="n">d</span><span class="o">.</span><span class="n">setDate</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="m">7</span><span class="p">);</span>
<a name="l-1253"></a>      <span class="p">}</span>
<a name="l-1254"></a>    <span class="err">}</span><span class="o">,</span>
<a name="l-1255"></a>    <span class="s2">&quot;day&quot;</span><span class="o">:</span> <span class="p">{</span>
<a name="l-1256"></a>      <span class="n">span</span><span class="o">:</span> <span class="m">86400000</span><span class="o">,</span>
<a name="l-1257"></a>      <span class="n">start</span><span class="o">:</span> <span class="n">function</span><span class="p">(</span><span class="n">d</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1258"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Date</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getMonth</span><span class="p">()</span><span class="o">,</span> <span class="n">d</span><span class="o">.</span><span class="n">getDate</span><span class="p">());</span>
<a name="l-1259"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1260"></a>      <span class="nt">fmt</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1261"></a>        <span class="n">return</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getFullYear</span><span class="p">())</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">pad2</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getMonth</span><span class="p">()</span> <span class="o">+</span> <span class="m">1</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">Morris</span><span class="o">.</span><span class="n">pad2</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getDate</span><span class="p">()));</span>
<a name="l-1262"></a>      <span class="p">}</span><span class="o">,</span>
<a name="l-1263"></a>      <span class="nt">incr</span><span class="o">:</span> <span class="nt">function</span><span class="o">(</span><span class="nt">d</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1264"></a>        <span class="n">return</span> <span class="n">d</span><span class="o">.</span><span class="n">setDate</span><span class="p">(</span><span class="n">d</span><span class="o">.</span><span class="n">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="m">1</span><span class="p">);</span>
<a name="l-1265"></a>      <span class="p">}</span>
<a name="l-1266"></a>    <span class="err">}</span><span class="o">,</span>
<a name="l-1267"></a>    <span class="s2">&quot;hour&quot;</span><span class="o">:</span> <span class="nt">minutesSpecHelper</span><span class="o">(</span><span class="nt">60</span><span class="o">),</span>
<a name="l-1268"></a>    <span class="s2">&quot;30min&quot;</span><span class="o">:</span> <span class="nt">minutesSpecHelper</span><span class="o">(</span><span class="nt">30</span><span class="o">),</span>
<a name="l-1269"></a>    <span class="s2">&quot;15min&quot;</span><span class="o">:</span> <span class="nt">minutesSpecHelper</span><span class="o">(</span><span class="nt">15</span><span class="o">),</span>
<a name="l-1270"></a>    <span class="s2">&quot;10min&quot;</span><span class="o">:</span> <span class="nt">minutesSpecHelper</span><span class="o">(</span><span class="nt">10</span><span class="o">),</span>
<a name="l-1271"></a>    <span class="s2">&quot;5min&quot;</span><span class="o">:</span> <span class="nt">minutesSpecHelper</span><span class="o">(</span><span class="nt">5</span><span class="o">),</span>
<a name="l-1272"></a>    <span class="s2">&quot;minute&quot;</span><span class="o">:</span> <span class="nt">minutesSpecHelper</span><span class="o">(</span><span class="nt">1</span><span class="o">),</span>
<a name="l-1273"></a>    <span class="s2">&quot;30sec&quot;</span><span class="o">:</span> <span class="nt">secondsSpecHelper</span><span class="o">(</span><span class="nt">30</span><span class="o">),</span>
<a name="l-1274"></a>    <span class="s2">&quot;15sec&quot;</span><span class="o">:</span> <span class="nt">secondsSpecHelper</span><span class="o">(</span><span class="nt">15</span><span class="o">),</span>
<a name="l-1275"></a>    <span class="s2">&quot;10sec&quot;</span><span class="o">:</span> <span class="nt">secondsSpecHelper</span><span class="o">(</span><span class="nt">10</span><span class="o">),</span>
<a name="l-1276"></a>    <span class="s2">&quot;5sec&quot;</span><span class="o">:</span> <span class="nt">secondsSpecHelper</span><span class="o">(</span><span class="nt">5</span><span class="o">),</span>
<a name="l-1277"></a>    <span class="s2">&quot;second&quot;</span><span class="o">:</span> <span class="nt">secondsSpecHelper</span><span class="o">(</span><span class="nt">1</span><span class="o">)</span>
<a name="l-1278"></a>  <span class="err">}</span><span class="o">;</span>
<a name="l-1279"></a>
<a name="l-1280"></a>  <span class="nt">Morris</span><span class="nc">.AUTO_LABEL_ORDER</span> <span class="o">=</span> <span class="cp">[</span><span class="s2">&quot;decade&quot;</span><span class="p">,</span> <span class="s2">&quot;year&quot;</span><span class="p">,</span> <span class="s2">&quot;month&quot;</span><span class="p">,</span> <span class="s2">&quot;week&quot;</span><span class="p">,</span> <span class="s2">&quot;day&quot;</span><span class="p">,</span> <span class="s2">&quot;hour&quot;</span><span class="p">,</span> <span class="s2">&quot;30min&quot;</span><span class="p">,</span> <span class="s2">&quot;15min&quot;</span><span class="p">,</span> <span class="s2">&quot;10min&quot;</span><span class="p">,</span> <span class="s2">&quot;5min&quot;</span><span class="p">,</span> <span class="s2">&quot;minute&quot;</span><span class="p">,</span> <span class="s2">&quot;30sec&quot;</span><span class="p">,</span> <span class="s2">&quot;15sec&quot;</span><span class="p">,</span> <span class="s2">&quot;10sec&quot;</span><span class="p">,</span> <span class="s2">&quot;5sec&quot;</span><span class="p">,</span> <span class="s2">&quot;second&quot;</span><span class="cp">]</span><span class="o">;</span>
<a name="l-1281"></a>
<a name="l-1282"></a>  <span class="nt">Morris</span><span class="nc">.Area</span> <span class="o">=</span> <span class="o">(</span><span class="nt">function</span><span class="o">(</span><span class="nt">_super</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1283"></a>    <span class="n">var</span> <span class="n">areaDefaults</span><span class="p">;</span>
<a name="l-1284"></a>
<a name="l-1285"></a>    <span class="n">__extends</span><span class="p">(</span><span class="n">Area</span><span class="o">,</span> <span class="n">_super</span><span class="p">);</span>
<a name="l-1286"></a>
<a name="l-1287"></a>    <span class="n">areaDefaults</span> <span class="o">=</span> <span class="err">{</span>
<a name="l-1288"></a>      <span class="n">fillOpacity</span><span class="o">:</span> <span class="s1">&#39;auto&#39;</span><span class="o">,</span>
<a name="l-1289"></a>      <span class="n">behaveLikeLine</span><span class="o">:</span> <span class="n">false</span>
<a name="l-1290"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1291"></a>
<a name="l-1292"></a>    <span class="nt">function</span> <span class="nt">Area</span><span class="o">(</span><span class="nt">options</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1293"></a>      <span class="n">var</span> <span class="n">areaOptions</span><span class="p">;</span>
<a name="l-1294"></a>      <span class="n">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="n">this</span> <span class="n">instanceof</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Area</span><span class="p">))</span> <span class="err">{</span>
<a name="l-1295"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Area</span><span class="p">(</span><span class="n">options</span><span class="p">);</span>
<a name="l-1296"></a>      <span class="p">}</span>
<a name="l-1297"></a>      <span class="nt">areaOptions</span> <span class="o">=</span> <span class="o">$</span><span class="nc">.extend</span><span class="o">(</span><span class="p">{}</span><span class="o">,</span> <span class="nt">areaDefaults</span><span class="o">,</span> <span class="nt">options</span><span class="o">);</span>
<a name="l-1298"></a>      <span class="nt">this</span><span class="nc">.cumulative</span> <span class="o">=</span> <span class="o">!</span><span class="nt">areaOptions</span><span class="nc">.behaveLikeLine</span><span class="o">;</span>
<a name="l-1299"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">areaOptions</span><span class="nc">.fillOpacity</span> <span class="o">===</span> <span class="s1">&#39;auto&#39;</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1300"></a>        <span class="n">areaOptions</span><span class="o">.</span><span class="n">fillOpacity</span> <span class="o">=</span> <span class="n">areaOptions</span><span class="o">.</span><span class="n">behaveLikeLine</span> <span class="o">?</span> <span class="o">.</span><span class="m">8</span> <span class="o">:</span> <span class="m">1</span><span class="p">;</span>
<a name="l-1301"></a>      <span class="p">}</span>
<a name="l-1302"></a>      <span class="nt">Area</span><span class="nc">.__super__.constructor.call</span><span class="o">(</span><span class="nt">this</span><span class="o">,</span> <span class="nt">areaOptions</span><span class="o">);</span>
<a name="l-1303"></a>    <span class="err">}</span>
<a name="l-1304"></a>
<a name="l-1305"></a>    <span class="nt">Area</span><span class="nc">.prototype.calcPoints</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1306"></a>      <span class="n">var</span> <span class="n">row</span><span class="o">,</span> <span class="n">total</span><span class="o">,</span> <span class="n">y</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-1307"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="p">;</span>
<a name="l-1308"></a>      <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1309"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1310"></a>        <span class="n">row</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1311"></a>        <span class="n">row</span><span class="o">.</span><span class="n">_x</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">transX</span><span class="p">(</span><span class="n">row</span><span class="o">.</span><span class="n">x</span><span class="p">);</span>
<a name="l-1312"></a>        <span class="n">total</span> <span class="o">=</span> <span class="m">0</span><span class="p">;</span>
<a name="l-1313"></a>        <span class="n">row</span><span class="o">.</span><span class="n">_y</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-1314"></a>          <span class="n">var</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_len1</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_results1</span><span class="p">;</span>
<a name="l-1315"></a>          <span class="n">_ref1</span> <span class="o">=</span> <span class="n">row</span><span class="o">.</span><span class="n">y</span><span class="p">;</span>
<a name="l-1316"></a>          <span class="n">_results1</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1317"></a>          <span class="n">for</span> <span class="p">(</span><span class="n">_j</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len1</span> <span class="o">=</span> <span class="n">_ref1</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_j</span> <span class="o">&lt;</span> <span class="n">_len1</span><span class="p">;</span> <span class="n">_j</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1318"></a>            <span class="n">y</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="nx">_j</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1319"></a>            <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">behaveLikeLine</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1320"></a>              <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">transY</span><span class="p">(</span><span class="n">y</span><span class="p">));</span>
<a name="l-1321"></a>            <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1322"></a>              <span class="n">total</span> <span class="o">+=</span> <span class="n">y</span> <span class="o">||</span> <span class="m">0</span><span class="p">;</span>
<a name="l-1323"></a>              <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">transY</span><span class="p">(</span><span class="n">total</span><span class="p">));</span>
<a name="l-1324"></a>            <span class="p">}</span>
<a name="l-1325"></a>          <span class="err">}</span>
<a name="l-1326"></a>          <span class="nt">return</span> <span class="nt">_results1</span><span class="o">;</span>
<a name="l-1327"></a>        <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-1328"></a>        <span class="nt">_results</span><span class="nc">.push</span><span class="o">(</span><span class="nt">row</span><span class="nc">._ymax</span> <span class="o">=</span> <span class="nt">Math</span><span class="nc">.max.apply</span><span class="o">(</span><span class="nt">Math</span><span class="o">,</span> <span class="nt">row</span><span class="nc">._y</span><span class="o">));</span>
<a name="l-1329"></a>      <span class="err">}</span>
<a name="l-1330"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-1331"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1332"></a>
<a name="l-1333"></a>    <span class="nt">Area</span><span class="nc">.prototype.drawSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1334"></a>      <span class="n">var</span> <span class="n">i</span><span class="o">,</span> <span class="n">range</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_k</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_results</span><span class="o">,</span> <span class="n">_results1</span><span class="o">,</span> <span class="n">_results2</span><span class="p">;</span>
<a name="l-1335"></a>      <span class="n">this</span><span class="o">.</span><span class="n">seriesPoints</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1336"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">behaveLikeLine</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1337"></a>        <span class="n">range</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-1338"></a>          <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1339"></a>          <span class="n">for</span> <span class="p">(</span><span class="n">var</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">ykeys</span><span class="o">.</span><span class="n">length</span> <span class="o">-</span> <span class="m">1</span><span class="p">;</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref</span> <span class="o">?</span> <span class="n">_i</span> <span class="o">&lt;=</span> <span class="n">_ref</span> <span class="o">:</span> <span class="n">_i</span> <span class="o">&gt;=</span> <span class="n">_ref</span><span class="p">;</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref</span> <span class="o">?</span> <span class="n">_i</span><span class="o">++</span> <span class="o">:</span> <span class="n">_i</span><span class="o">--</span><span class="p">)</span><span class="err">{</span> <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">_i</span><span class="p">);</span> <span class="p">}</span>
<a name="l-1340"></a>          <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-1341"></a>        <span class="err">}</span><span class="o">)</span><span class="nc">.apply</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-1342"></a>      <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1343"></a>        <span class="n">range</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-1344"></a>          <span class="n">_results1</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1345"></a>          <span class="n">for</span> <span class="p">(</span><span class="n">var</span> <span class="n">_j</span> <span class="o">=</span> <span class="n">_ref1</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">ykeys</span><span class="o">.</span><span class="n">length</span> <span class="o">-</span> <span class="m">1</span><span class="p">;</span> <span class="n">_ref1</span> <span class="o">&lt;=</span> <span class="m">0</span> <span class="o">?</span> <span class="n">_j</span> <span class="o">&lt;=</span> <span class="m">0</span> <span class="o">:</span> <span class="n">_j</span> <span class="o">&gt;=</span> <span class="m">0</span><span class="p">;</span> <span class="n">_ref1</span> <span class="o">&lt;=</span> <span class="m">0</span> <span class="o">?</span> <span class="n">_j</span><span class="o">++</span> <span class="o">:</span> <span class="n">_j</span><span class="o">--</span><span class="p">)</span><span class="err">{</span> <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">_j</span><span class="p">);</span> <span class="p">}</span>
<a name="l-1346"></a>          <span class="nt">return</span> <span class="nt">_results1</span><span class="o">;</span>
<a name="l-1347"></a>        <span class="err">}</span><span class="o">)</span><span class="nc">.apply</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-1348"></a>      <span class="err">}</span>
<a name="l-1349"></a>      <span class="nt">_results2</span> <span class="o">=</span> <span class="cp">[]</span><span class="o">;</span>
<a name="l-1350"></a>      <span class="nt">for</span> <span class="o">(</span><span class="nt">_k</span> <span class="o">=</span> <span class="nt">0</span><span class="o">,</span> <span class="nt">_len</span> <span class="o">=</span> <span class="nt">range</span><span class="nc">.length</span><span class="o">;</span> <span class="nt">_k</span> <span class="o">&lt;</span> <span class="nt">_len</span><span class="o">;</span> <span class="nt">_k</span><span class="o">++)</span> <span class="p">{</span>
<a name="l-1351"></a>        <span class="n">i</span> <span class="o">=</span> <span class="n">range</span><span class="cp">[</span><span class="nx">_k</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1352"></a>        <span class="n">this</span><span class="o">.</span><span class="n">_drawFillFor</span><span class="p">(</span><span class="n">i</span><span class="p">);</span>
<a name="l-1353"></a>        <span class="n">this</span><span class="o">.</span><span class="n">_drawLineFor</span><span class="p">(</span><span class="n">i</span><span class="p">);</span>
<a name="l-1354"></a>        <span class="n">_results2</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">_drawPointFor</span><span class="p">(</span><span class="n">i</span><span class="p">));</span>
<a name="l-1355"></a>      <span class="p">}</span>
<a name="l-1356"></a>      <span class="nt">return</span> <span class="nt">_results2</span><span class="o">;</span>
<a name="l-1357"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1358"></a>
<a name="l-1359"></a>    <span class="nt">Area</span><span class="nc">.prototype._drawFillFor</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1360"></a>      <span class="n">var</span> <span class="n">path</span><span class="p">;</span>
<a name="l-1361"></a>      <span class="n">path</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">paths</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1362"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">path</span> <span class="o">!==</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1363"></a>        <span class="n">path</span> <span class="o">=</span> <span class="n">path</span> <span class="o">+</span> <span class="p">(</span><span class="s2">&quot;L&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">transX</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">xmax</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="nb">bottom</span> <span class="o">+</span> <span class="s2">&quot;L&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">transX</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">xmin</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="nb">bottom</span> <span class="o">+</span> <span class="s2">&quot;Z&quot;</span><span class="p">);</span>
<a name="l-1364"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">drawFilledPath</span><span class="p">(</span><span class="n">path</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">fillForSeries</span><span class="p">(</span><span class="n">index</span><span class="p">));</span>
<a name="l-1365"></a>      <span class="p">}</span>
<a name="l-1366"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1367"></a>
<a name="l-1368"></a>    <span class="nt">Area</span><span class="nc">.prototype.fillForSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">i</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1369"></a>      <span class="n">var</span> <span class="nb">color</span><span class="p">;</span>
<a name="l-1370"></a>      <span class="nb">color</span> <span class="o">=</span> <span class="n">Raphael</span><span class="o">.</span><span class="n">rgb2hsl</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">colorFor</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span><span class="o">,</span> <span class="n">i</span><span class="o">,</span> <span class="s1">&#39;line&#39;</span><span class="p">));</span>
<a name="l-1371"></a>      <span class="n">return</span> <span class="n">Raphael</span><span class="o">.</span><span class="n">hsl</span><span class="p">(</span><span class="nb">color</span><span class="o">.</span><span class="n">h</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">behaveLikeLine</span> <span class="o">?</span> <span class="nb">color</span><span class="o">.</span><span class="n">s</span> <span class="o">*</span> <span class="m">0</span><span class="o">.</span><span class="m">9</span> <span class="o">:</span> <span class="nb">color</span><span class="o">.</span><span class="n">s</span> <span class="o">*</span> <span class="m">0</span><span class="o">.</span><span class="m">75</span><span class="o">,</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="m">0</span><span class="o">.</span><span class="m">98</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">behaveLikeLine</span> <span class="o">?</span> <span class="nb">color</span><span class="o">.</span><span class="n">l</span> <span class="o">*</span> <span class="m">1</span><span class="o">.</span><span class="m">2</span> <span class="o">:</span> <span class="nb">color</span><span class="o">.</span><span class="n">l</span> <span class="o">*</span> <span class="m">1</span><span class="o">.</span><span class="m">25</span><span class="p">));</span>
<a name="l-1372"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1373"></a>
<a name="l-1374"></a>    <span class="nt">Area</span><span class="nc">.prototype.drawFilledPath</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">path</span><span class="o">,</span> <span class="nt">fill</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1375"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">path</span><span class="p">(</span><span class="n">path</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;fill&#39;</span><span class="o">,</span> <span class="n">fill</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;fill-opacity&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">fillOpacity</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;stroke&#39;</span><span class="o">,</span> <span class="s1">&#39;none&#39;</span><span class="p">);</span>
<a name="l-1376"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1377"></a>
<a name="l-1378"></a>    <span class="nt">return</span> <span class="nt">Area</span><span class="o">;</span>
<a name="l-1379"></a>
<a name="l-1380"></a>  <span class="err">}</span><span class="o">)(</span><span class="nt">Morris</span><span class="nc">.Line</span><span class="o">);</span>
<a name="l-1381"></a>
<a name="l-1382"></a>  <span class="nt">Morris</span><span class="nc">.Bar</span> <span class="o">=</span> <span class="o">(</span><span class="nt">function</span><span class="o">(</span><span class="nt">_super</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1383"></a>    <span class="n">__extends</span><span class="p">(</span><span class="n">Bar</span><span class="o">,</span> <span class="n">_super</span><span class="p">);</span>
<a name="l-1384"></a>
<a name="l-1385"></a>    <span class="n">function</span> <span class="n">Bar</span><span class="p">(</span><span class="n">options</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1386"></a>      <span class="n">this</span><span class="o">.</span><span class="n">onHoverOut</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">onHoverOut</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-1387"></a>      <span class="n">this</span><span class="o">.</span><span class="n">onHoverMove</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">onHoverMove</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-1388"></a>      <span class="n">this</span><span class="o">.</span><span class="n">onGridClick</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">onGridClick</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-1389"></a>      <span class="n">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="n">this</span> <span class="n">instanceof</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Bar</span><span class="p">))</span> <span class="err">{</span>
<a name="l-1390"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Bar</span><span class="p">(</span><span class="n">options</span><span class="p">);</span>
<a name="l-1391"></a>      <span class="p">}</span>
<a name="l-1392"></a>      <span class="nt">Bar</span><span class="nc">.__super__.constructor.call</span><span class="o">(</span><span class="nt">this</span><span class="o">,</span> <span class="o">$</span><span class="nc">.extend</span><span class="o">(</span><span class="p">{}</span><span class="o">,</span> <span class="nt">options</span><span class="o">,</span> <span class="p">{</span>
<a name="l-1393"></a>        <span class="n">parseTime</span><span class="o">:</span> <span class="n">false</span>
<a name="l-1394"></a>      <span class="p">}</span><span class="o">));</span>
<a name="l-1395"></a>    <span class="err">}</span>
<a name="l-1396"></a>
<a name="l-1397"></a>    <span class="nt">Bar</span><span class="nc">.prototype.init</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1398"></a>      <span class="n">this</span><span class="o">.</span><span class="n">cumulative</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">stacked</span><span class="p">;</span>
<a name="l-1399"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">hideHover</span> <span class="o">!==</span> <span class="s1">&#39;always&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1400"></a>        <span class="n">this</span><span class="o">.</span><span class="n">hover</span> <span class="o">=</span> <span class="n">new</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Hover</span><span class="p">(</span><span class="err">{</span>
<a name="l-1401"></a>          <span class="n">parent</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span>
<a name="l-1402"></a>        <span class="p">}</span><span class="o">);</span>
<a name="l-1403"></a>        <span class="nt">this</span><span class="nc">.on</span><span class="o">(</span><span class="s1">&#39;hovermove&#39;</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.onHoverMove</span><span class="o">);</span>
<a name="l-1404"></a>        <span class="nt">this</span><span class="nc">.on</span><span class="o">(</span><span class="s1">&#39;hoverout&#39;</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.onHoverOut</span><span class="o">);</span>
<a name="l-1405"></a>        <span class="nt">return</span> <span class="nt">this</span><span class="nc">.on</span><span class="o">(</span><span class="s1">&#39;gridclick&#39;</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.onGridClick</span><span class="o">);</span>
<a name="l-1406"></a>      <span class="err">}</span>
<a name="l-1407"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1408"></a>
<a name="l-1409"></a>    <span class="nt">Bar</span><span class="nc">.prototype.defaults</span> <span class="o">=</span> <span class="p">{</span>
<a name="l-1410"></a>      <span class="n">barSizeRatio</span><span class="o">:</span> <span class="m">0</span><span class="o">.</span><span class="m">75</span><span class="o">,</span>
<a name="l-1411"></a>      <span class="n">barGap</span><span class="o">:</span> <span class="m">3</span><span class="o">,</span>
<a name="l-1412"></a>      <span class="n">barColors</span><span class="o">:</span> <span class="cp">[</span><span class="s1">&#39;#0b62a4&#39;</span><span class="p">,</span> <span class="s1">&#39;#7a92a3&#39;</span><span class="p">,</span> <span class="s1">&#39;#4da74d&#39;</span><span class="p">,</span> <span class="s1">&#39;#afd8f8&#39;</span><span class="p">,</span> <span class="s1">&#39;#edc240&#39;</span><span class="p">,</span> <span class="s1">&#39;#cb4b4b&#39;</span><span class="p">,</span> <span class="s1">&#39;#9440ed&#39;</span><span class="cp">]</span><span class="o">,</span>
<a name="l-1413"></a>      <span class="n">barOpacity</span><span class="o">:</span> <span class="m">1</span><span class="o">.</span><span class="m">0</span><span class="o">,</span>
<a name="l-1414"></a>      <span class="n">barRadius</span><span class="o">:</span> <span class="cp">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="cp">]</span><span class="o">,</span>
<a name="l-1415"></a>      <span class="n">xLabelMargin</span><span class="o">:</span> <span class="m">50</span>
<a name="l-1416"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1417"></a>
<a name="l-1418"></a>    <span class="nt">Bar</span><span class="nc">.prototype.calc</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1419"></a>      <span class="n">var</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-1420"></a>      <span class="n">this</span><span class="o">.</span><span class="n">calcBars</span><span class="p">();</span>
<a name="l-1421"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">hideHover</span> <span class="o">===</span> <span class="n">false</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1422"></a>        <span class="n">return</span> <span class="p">(</span><span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">hover</span><span class="p">)</span><span class="o">.</span><span class="n">update</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">_ref</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">hoverContentForRow</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">length</span> <span class="o">-</span> <span class="m">1</span><span class="p">));</span>
<a name="l-1423"></a>      <span class="p">}</span>
<a name="l-1424"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1425"></a>
<a name="l-1426"></a>    <span class="nt">Bar</span><span class="nc">.prototype.calcBars</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1427"></a>      <span class="n">var</span> <span class="n">idx</span><span class="o">,</span> <span class="n">row</span><span class="o">,</span> <span class="n">y</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-1428"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="p">;</span>
<a name="l-1429"></a>      <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1430"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">idx</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">idx</span> <span class="o">=</span> <span class="o">++</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1431"></a>        <span class="n">row</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">idx</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1432"></a>        <span class="n">row</span><span class="o">.</span><span class="n">_x</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="nb">left</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="nb">width</span> <span class="o">*</span> <span class="p">(</span><span class="n">idx</span> <span class="o">+</span> <span class="m">0</span><span class="o">.</span><span class="m">5</span><span class="p">)</span> <span class="o">/</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">length</span><span class="p">;</span>
<a name="l-1433"></a>        <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">row</span><span class="o">.</span><span class="n">_y</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-1434"></a>          <span class="n">var</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_len1</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_results1</span><span class="p">;</span>
<a name="l-1435"></a>          <span class="n">_ref1</span> <span class="o">=</span> <span class="n">row</span><span class="o">.</span><span class="n">y</span><span class="p">;</span>
<a name="l-1436"></a>          <span class="n">_results1</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1437"></a>          <span class="n">for</span> <span class="p">(</span><span class="n">_j</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len1</span> <span class="o">=</span> <span class="n">_ref1</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_j</span> <span class="o">&lt;</span> <span class="n">_len1</span><span class="p">;</span> <span class="n">_j</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1438"></a>            <span class="n">y</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="nx">_j</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1439"></a>            <span class="n">if</span> <span class="p">(</span><span class="n">y</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1440"></a>              <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">transY</span><span class="p">(</span><span class="n">y</span><span class="p">));</span>
<a name="l-1441"></a>            <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1442"></a>              <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">null</span><span class="p">);</span>
<a name="l-1443"></a>            <span class="p">}</span>
<a name="l-1444"></a>          <span class="err">}</span>
<a name="l-1445"></a>          <span class="nt">return</span> <span class="nt">_results1</span><span class="o">;</span>
<a name="l-1446"></a>        <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">));</span>
<a name="l-1447"></a>      <span class="err">}</span>
<a name="l-1448"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-1449"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1450"></a>
<a name="l-1451"></a>    <span class="nt">Bar</span><span class="nc">.prototype.draw</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1452"></a>      <span class="n">var</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-1453"></a>      <span class="n">if</span> <span class="p">((</span><span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">axes</span><span class="p">)</span> <span class="o">===</span> <span class="n">true</span> <span class="o">||</span> <span class="n">_ref</span> <span class="o">===</span> <span class="s1">&#39;both&#39;</span> <span class="o">||</span> <span class="n">_ref</span> <span class="o">===</span> <span class="s1">&#39;x&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1454"></a>        <span class="n">this</span><span class="o">.</span><span class="n">drawXAxis</span><span class="p">();</span>
<a name="l-1455"></a>      <span class="p">}</span>
<a name="l-1456"></a>      <span class="nt">return</span> <span class="nt">this</span><span class="nc">.drawSeries</span><span class="o">();</span>
<a name="l-1457"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1458"></a>
<a name="l-1459"></a>    <span class="nt">Bar</span><span class="nc">.prototype.drawXAxis</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1460"></a>      <span class="n">var</span> <span class="n">i</span><span class="o">,</span> <span class="n">label</span><span class="o">,</span> <span class="n">labelBox</span><span class="o">,</span> <span class="nb">margin</span><span class="o">,</span> <span class="n">offset</span><span class="o">,</span> <span class="n">prevAngleMargin</span><span class="o">,</span> <span class="n">prevLabelMargin</span><span class="o">,</span> <span class="n">row</span><span class="o">,</span> <span class="n">textBox</span><span class="o">,</span> <span class="n">ypos</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-1461"></a>      <span class="n">ypos</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="nb">bottom</span> <span class="o">+</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xAxisLabelTopPadding</span> <span class="o">||</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="nb">padding</span> <span class="o">/</span> <span class="m">2</span><span class="p">);</span>
<a name="l-1462"></a>      <span class="n">prevLabelMargin</span> <span class="o">=</span> <span class="n">null</span><span class="p">;</span>
<a name="l-1463"></a>      <span class="n">prevAngleMargin</span> <span class="o">=</span> <span class="n">null</span><span class="p">;</span>
<a name="l-1464"></a>      <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1465"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">i</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref</span> <span class="o">?</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_ref</span> <span class="o">:</span> <span class="n">_i</span> <span class="o">&gt;</span> <span class="n">_ref</span><span class="p">;</span> <span class="n">i</span> <span class="o">=</span> <span class="m">0</span> <span class="o">&lt;=</span> <span class="n">_ref</span> <span class="o">?</span> <span class="o">++</span><span class="n">_i</span> <span class="o">:</span> <span class="o">--</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1466"></a>        <span class="n">row</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">this.data.length</span> <span class="o">-</span> <span class="mi">1</span> <span class="o">-</span> <span class="nx">i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1467"></a>        <span class="n">label</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">drawXAxisLabel</span><span class="p">(</span><span class="n">row</span><span class="o">.</span><span class="n">_x</span><span class="o">,</span> <span class="n">ypos</span><span class="o">,</span> <span class="n">row</span><span class="o">.</span><span class="n">label</span><span class="p">);</span>
<a name="l-1468"></a>        <span class="n">textBox</span> <span class="o">=</span> <span class="n">label</span><span class="o">.</span><span class="n">getBBox</span><span class="p">();</span>
<a name="l-1469"></a>        <span class="n">label</span><span class="o">.</span><span class="n">transform</span><span class="p">(</span><span class="s2">&quot;r&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="o">-</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span><span class="p">));</span>
<a name="l-1470"></a>        <span class="n">labelBox</span> <span class="o">=</span> <span class="n">label</span><span class="o">.</span><span class="n">getBBox</span><span class="p">();</span>
<a name="l-1471"></a>        <span class="n">label</span><span class="o">.</span><span class="n">transform</span><span class="p">(</span><span class="s2">&quot;t0,&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">labelBox</span><span class="o">.</span><span class="nb">height</span> <span class="o">/</span> <span class="m">2</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;...&quot;</span><span class="p">);</span>
<a name="l-1472"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span> <span class="o">!==</span> <span class="m">0</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1473"></a>          <span class="n">offset</span> <span class="o">=</span> <span class="m">-0</span><span class="o">.</span><span class="m">5</span> <span class="o">*</span> <span class="n">textBox</span><span class="o">.</span><span class="nb">width</span> <span class="o">*</span> <span class="n">Math</span><span class="o">.</span><span class="n">cos</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span> <span class="o">*</span> <span class="n">Math</span><span class="o">.</span><span class="n">PI</span> <span class="o">/</span> <span class="m">180</span><span class="o">.</span><span class="m">0</span><span class="p">);</span>
<a name="l-1474"></a>          <span class="n">label</span><span class="o">.</span><span class="n">transform</span><span class="p">(</span><span class="s2">&quot;t&quot;</span> <span class="o">+</span> <span class="n">offset</span> <span class="o">+</span> <span class="s2">&quot;,0...&quot;</span><span class="p">);</span>
<a name="l-1475"></a>        <span class="p">}</span>
<a name="l-1476"></a>        <span class="nt">if</span> <span class="o">(((</span><span class="nt">prevLabelMargin</span> <span class="o">==</span> <span class="nt">null</span><span class="o">)</span> <span class="o">||</span> <span class="nt">prevLabelMargin</span> <span class="o">&gt;=</span> <span class="nt">labelBox</span><span class="nc">.x</span> <span class="o">+</span> <span class="nt">labelBox</span><span class="nc">.width</span> <span class="o">||</span> <span class="o">(</span><span class="nt">prevAngleMargin</span> <span class="o">!=</span> <span class="nt">null</span><span class="o">)</span> <span class="o">&amp;&amp;</span> <span class="nt">prevAngleMargin</span> <span class="o">&gt;=</span> <span class="nt">labelBox</span><span class="nc">.x</span><span class="o">)</span> <span class="o">&amp;&amp;</span> <span class="nt">labelBox</span><span class="nc">.x</span> <span class="o">&gt;=</span> <span class="nt">0</span> <span class="o">&amp;&amp;</span> <span class="o">(</span><span class="nt">labelBox</span><span class="nc">.x</span> <span class="o">+</span> <span class="nt">labelBox</span><span class="nc">.width</span><span class="o">)</span> <span class="o">&lt;</span> <span class="nt">this</span><span class="nc">.el.width</span><span class="o">())</span> <span class="p">{</span>
<a name="l-1477"></a>          <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span> <span class="o">!==</span> <span class="m">0</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1478"></a>            <span class="nb">margin</span> <span class="o">=</span> <span class="m">1</span><span class="o">.</span><span class="m">25</span> <span class="o">*</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextSize</span> <span class="o">/</span> <span class="n">Math</span><span class="o">.</span><span class="n">sin</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">xLabelAngle</span> <span class="o">*</span> <span class="n">Math</span><span class="o">.</span><span class="n">PI</span> <span class="o">/</span> <span class="m">180</span><span class="o">.</span><span class="m">0</span><span class="p">);</span>
<a name="l-1479"></a>            <span class="n">prevAngleMargin</span> <span class="o">=</span> <span class="n">labelBox</span><span class="o">.</span><span class="n">x</span> <span class="o">-</span> <span class="nb">margin</span><span class="p">;</span>
<a name="l-1480"></a>          <span class="p">}</span>
<a name="l-1481"></a>          <span class="nt">_results</span><span class="nc">.push</span><span class="o">(</span><span class="nt">prevLabelMargin</span> <span class="o">=</span> <span class="nt">labelBox</span><span class="nc">.x</span> <span class="nt">-</span> <span class="nt">this</span><span class="nc">.options.xLabelMargin</span><span class="o">);</span>
<a name="l-1482"></a>        <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1483"></a>          <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">label</span><span class="o">.</span><span class="n">remove</span><span class="p">());</span>
<a name="l-1484"></a>        <span class="p">}</span>
<a name="l-1485"></a>      <span class="err">}</span>
<a name="l-1486"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-1487"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1488"></a>
<a name="l-1489"></a>    <span class="nt">Bar</span><span class="nc">.prototype.drawSeries</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1490"></a>      <span class="n">var</span> <span class="n">barWidth</span><span class="o">,</span> <span class="nb">bottom</span><span class="o">,</span> <span class="n">groupWidth</span><span class="o">,</span> <span class="n">idx</span><span class="o">,</span> <span class="n">lastTop</span><span class="o">,</span> <span class="nb">left</span><span class="o">,</span> <span class="n">leftPadding</span><span class="o">,</span> <span class="n">numBars</span><span class="o">,</span> <span class="n">row</span><span class="o">,</span> <span class="n">sidx</span><span class="o">,</span> <span class="nb">size</span><span class="o">,</span> <span class="nb">top</span><span class="o">,</span> <span class="n">ypos</span><span class="o">,</span> <span class="n">zeroPos</span><span class="p">;</span>
<a name="l-1491"></a>      <span class="n">groupWidth</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="nb">width</span> <span class="o">/</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">length</span><span class="p">;</span>
<a name="l-1492"></a>      <span class="n">numBars</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">stacked</span> <span class="o">!=</span> <span class="n">null</span> <span class="o">?</span> <span class="m">1</span> <span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">ykeys</span><span class="o">.</span><span class="n">length</span><span class="p">;</span>
<a name="l-1493"></a>      <span class="n">barWidth</span> <span class="o">=</span> <span class="p">(</span><span class="n">groupWidth</span> <span class="o">*</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">barSizeRatio</span> <span class="o">-</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">barGap</span> <span class="o">*</span> <span class="p">(</span><span class="n">numBars</span> <span class="o">-</span> <span class="m">1</span><span class="p">))</span> <span class="o">/</span> <span class="n">numBars</span><span class="p">;</span>
<a name="l-1494"></a>      <span class="n">leftPadding</span> <span class="o">=</span> <span class="n">groupWidth</span> <span class="o">*</span> <span class="p">(</span><span class="m">1</span> <span class="o">-</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">barSizeRatio</span><span class="p">)</span> <span class="o">/</span> <span class="m">2</span><span class="p">;</span>
<a name="l-1495"></a>      <span class="n">zeroPos</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">ymin</span> <span class="o">&lt;=</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> <span class="n">this</span><span class="o">.</span><span class="n">ymax</span> <span class="o">&gt;=</span> <span class="m">0</span> <span class="o">?</span> <span class="n">this</span><span class="o">.</span><span class="n">transY</span><span class="p">(</span><span class="m">0</span><span class="p">)</span> <span class="o">:</span> <span class="n">null</span><span class="p">;</span>
<a name="l-1496"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">bars</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-1497"></a>        <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-1498"></a>        <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="p">;</span>
<a name="l-1499"></a>        <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1500"></a>        <span class="n">for</span> <span class="p">(</span><span class="n">idx</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">idx</span> <span class="o">=</span> <span class="o">++</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1501"></a>          <span class="n">row</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">idx</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1502"></a>          <span class="n">lastTop</span> <span class="o">=</span> <span class="m">0</span><span class="p">;</span>
<a name="l-1503"></a>          <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">((</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-1504"></a>            <span class="n">var</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_len1</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_results1</span><span class="p">;</span>
<a name="l-1505"></a>            <span class="n">_ref1</span> <span class="o">=</span> <span class="n">row</span><span class="o">.</span><span class="n">_y</span><span class="p">;</span>
<a name="l-1506"></a>            <span class="n">_results1</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1507"></a>            <span class="n">for</span> <span class="p">(</span><span class="n">sidx</span> <span class="o">=</span> <span class="n">_j</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len1</span> <span class="o">=</span> <span class="n">_ref1</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_j</span> <span class="o">&lt;</span> <span class="n">_len1</span><span class="p">;</span> <span class="n">sidx</span> <span class="o">=</span> <span class="o">++</span><span class="n">_j</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1508"></a>              <span class="n">ypos</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="nx">sidx</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1509"></a>              <span class="n">if</span> <span class="p">(</span><span class="n">ypos</span> <span class="o">!==</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1510"></a>                <span class="n">if</span> <span class="p">(</span><span class="n">zeroPos</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1511"></a>                  <span class="nb">top</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">ypos</span><span class="o">,</span> <span class="n">zeroPos</span><span class="p">);</span>
<a name="l-1512"></a>                  <span class="nb">bottom</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">max</span><span class="p">(</span><span class="n">ypos</span><span class="o">,</span> <span class="n">zeroPos</span><span class="p">);</span>
<a name="l-1513"></a>                <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1514"></a>                  <span class="nb">top</span> <span class="o">=</span> <span class="n">ypos</span><span class="p">;</span>
<a name="l-1515"></a>                  <span class="nb">bottom</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="nb">bottom</span><span class="p">;</span>
<a name="l-1516"></a>                <span class="p">}</span>
<a name="l-1517"></a>                <span class="nt">left</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.left</span> <span class="o">+</span> <span class="nt">idx</span> <span class="o">*</span> <span class="nt">groupWidth</span> <span class="o">+</span> <span class="nt">leftPadding</span><span class="o">;</span>
<a name="l-1518"></a>                <span class="nt">if</span> <span class="o">(!</span><span class="nt">this</span><span class="nc">.options.stacked</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1519"></a>                  <span class="nb">left</span> <span class="o">+=</span> <span class="n">sidx</span> <span class="o">*</span> <span class="p">(</span><span class="n">barWidth</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">barGap</span><span class="p">);</span>
<a name="l-1520"></a>                <span class="p">}</span>
<a name="l-1521"></a>                <span class="nt">size</span> <span class="o">=</span> <span class="nt">bottom</span> <span class="nt">-</span> <span class="nt">top</span><span class="o">;</span>
<a name="l-1522"></a>                <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.stacked</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1523"></a>                  <span class="nb">top</span> <span class="o">-=</span> <span class="n">lastTop</span><span class="p">;</span>
<a name="l-1524"></a>                <span class="p">}</span>
<a name="l-1525"></a>                <span class="nt">this</span><span class="nc">.drawBar</span><span class="o">(</span><span class="nt">left</span><span class="o">,</span> <span class="nt">top</span><span class="o">,</span> <span class="nt">barWidth</span><span class="o">,</span> <span class="nt">size</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.colorFor</span><span class="o">(</span><span class="nt">row</span><span class="o">,</span> <span class="nt">sidx</span><span class="o">,</span> <span class="s1">&#39;bar&#39;</span><span class="o">),</span> <span class="nt">this</span><span class="nc">.options.barOpacity</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.options.barRadius</span><span class="o">);</span>
<a name="l-1526"></a>                <span class="nt">_results1</span><span class="nc">.push</span><span class="o">(</span><span class="nt">lastTop</span> <span class="o">+=</span> <span class="nt">size</span><span class="o">);</span>
<a name="l-1527"></a>              <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1528"></a>                <span class="n">_results1</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">null</span><span class="p">);</span>
<a name="l-1529"></a>              <span class="p">}</span>
<a name="l-1530"></a>            <span class="err">}</span>
<a name="l-1531"></a>            <span class="nt">return</span> <span class="nt">_results1</span><span class="o">;</span>
<a name="l-1532"></a>          <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">));</span>
<a name="l-1533"></a>        <span class="err">}</span>
<a name="l-1534"></a>        <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-1535"></a>      <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-1536"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1537"></a>
<a name="l-1538"></a>    <span class="nt">Bar</span><span class="nc">.prototype.colorFor</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">row</span><span class="o">,</span> <span class="nt">sidx</span><span class="o">,</span> <span class="nt">type</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1539"></a>      <span class="n">var</span> <span class="n">r</span><span class="o">,</span> <span class="n">s</span><span class="p">;</span>
<a name="l-1540"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">typeof</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">barColors</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1541"></a>        <span class="n">r</span> <span class="o">=</span> <span class="err">{</span>
<a name="l-1542"></a>          <span class="n">x</span><span class="o">:</span> <span class="n">row</span><span class="o">.</span><span class="n">x</span><span class="o">,</span>
<a name="l-1543"></a>          <span class="n">y</span><span class="o">:</span> <span class="n">row</span><span class="o">.</span><span class="n">y</span><span class="cp">[</span><span class="nx">sidx</span><span class="cp">]</span><span class="o">,</span>
<a name="l-1544"></a>          <span class="n">label</span><span class="o">:</span> <span class="n">row</span><span class="o">.</span><span class="n">label</span>
<a name="l-1545"></a>        <span class="p">}</span><span class="o">;</span>
<a name="l-1546"></a>        <span class="nt">s</span> <span class="o">=</span> <span class="p">{</span>
<a name="l-1547"></a>          <span class="n">index</span><span class="o">:</span> <span class="n">sidx</span><span class="o">,</span>
<a name="l-1548"></a>          <span class="n">key</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">ykeys</span><span class="cp">[</span><span class="nx">sidx</span><span class="cp">]</span><span class="o">,</span>
<a name="l-1549"></a>          <span class="n">label</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">labels</span><span class="cp">[</span><span class="nx">sidx</span><span class="cp">]</span>
<a name="l-1550"></a>        <span class="p">}</span><span class="o">;</span>
<a name="l-1551"></a>        <span class="nt">return</span> <span class="nt">this</span><span class="nc">.options.barColors.call</span><span class="o">(</span><span class="nt">this</span><span class="o">,</span> <span class="nt">r</span><span class="o">,</span> <span class="nt">s</span><span class="o">,</span> <span class="nt">type</span><span class="o">);</span>
<a name="l-1552"></a>      <span class="err">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1553"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">barColors</span><span class="cp">[</span><span class="nx">sidx</span> <span class="o">%</span> <span class="nx">this.options.barColors.length</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1554"></a>      <span class="p">}</span>
<a name="l-1555"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1556"></a>
<a name="l-1557"></a>    <span class="nt">Bar</span><span class="nc">.prototype.hitTest</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1558"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="o">.</span><span class="n">length</span> <span class="o">===</span> <span class="m">0</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1559"></a>        <span class="n">return</span> <span class="n">null</span><span class="p">;</span>
<a name="l-1560"></a>      <span class="p">}</span>
<a name="l-1561"></a>      <span class="nt">x</span> <span class="o">=</span> <span class="nt">Math</span><span class="nc">.max</span><span class="o">(</span><span class="nt">Math</span><span class="nc">.min</span><span class="o">(</span><span class="nt">x</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.right</span><span class="o">),</span> <span class="nt">this</span><span class="nc">.left</span><span class="o">);</span>
<a name="l-1562"></a>      <span class="nt">return</span> <span class="nt">Math</span><span class="nc">.min</span><span class="o">(</span><span class="nt">this</span><span class="nc">.data.length</span> <span class="nt">-</span> <span class="nt">1</span><span class="o">,</span> <span class="nt">Math</span><span class="nc">.floor</span><span class="o">((</span><span class="nt">x</span> <span class="nt">-</span> <span class="nt">this</span><span class="nc">.left</span><span class="o">)</span> <span class="o">/</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.width</span> <span class="o">/</span> <span class="nt">this</span><span class="nc">.data.length</span><span class="o">)));</span>
<a name="l-1563"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1564"></a>
<a name="l-1565"></a>    <span class="nt">Bar</span><span class="nc">.prototype.onGridClick</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">,</span> <span class="nt">y</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1566"></a>      <span class="n">var</span> <span class="n">index</span><span class="p">;</span>
<a name="l-1567"></a>      <span class="n">index</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">hitTest</span><span class="p">(</span><span class="n">x</span><span class="p">);</span>
<a name="l-1568"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">fire</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="o">,</span> <span class="n">index</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="o">.</span><span class="n">src</span><span class="o">,</span> <span class="n">x</span><span class="o">,</span> <span class="n">y</span><span class="p">);</span>
<a name="l-1569"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1570"></a>
<a name="l-1571"></a>    <span class="nt">Bar</span><span class="nc">.prototype.onHoverMove</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">,</span> <span class="nt">y</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1572"></a>      <span class="n">var</span> <span class="n">index</span><span class="o">,</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-1573"></a>      <span class="n">index</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">hitTest</span><span class="p">(</span><span class="n">x</span><span class="p">);</span>
<a name="l-1574"></a>      <span class="n">return</span> <span class="p">(</span><span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">hover</span><span class="p">)</span><span class="o">.</span><span class="n">update</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">_ref</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">hoverContentForRow</span><span class="p">(</span><span class="n">index</span><span class="p">));</span>
<a name="l-1575"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1576"></a>
<a name="l-1577"></a>    <span class="nt">Bar</span><span class="nc">.prototype.onHoverOut</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1578"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">hideHover</span> <span class="o">!==</span> <span class="n">false</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1579"></a>        <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">hover</span><span class="o">.</span><span class="nb">hide</span><span class="p">();</span>
<a name="l-1580"></a>      <span class="p">}</span>
<a name="l-1581"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1582"></a>
<a name="l-1583"></a>    <span class="nt">Bar</span><span class="nc">.prototype.hoverContentForRow</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">index</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1584"></a>      <span class="n">var</span> <span class="nb">content</span><span class="o">,</span> <span class="n">j</span><span class="o">,</span> <span class="n">row</span><span class="o">,</span> <span class="n">x</span><span class="o">,</span> <span class="n">y</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-1585"></a>      <span class="n">row</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">index</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1586"></a>      <span class="nb">content</span> <span class="o">=</span> <span class="s2">&quot;&lt;div class=&#39;morris-hover-row-label&#39;&gt;&quot;</span> <span class="o">+</span> <span class="n">row</span><span class="o">.</span><span class="n">label</span> <span class="o">+</span> <span class="s2">&quot;&lt;/div&gt;&quot;</span><span class="p">;</span>
<a name="l-1587"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">row</span><span class="o">.</span><span class="n">y</span><span class="p">;</span>
<a name="l-1588"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">j</span> <span class="o">=</span> <span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">j</span> <span class="o">=</span> <span class="o">++</span><span class="n">_i</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1589"></a>        <span class="n">y</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">j</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1590"></a>        <span class="nb">content</span> <span class="o">+=</span> <span class="s2">&quot;&lt;div class=&#39;morris-hover-point&#39; style=&#39;color: &quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">colorFor</span><span class="p">(</span><span class="n">row</span><span class="o">,</span> <span class="n">j</span><span class="o">,</span> <span class="s1">&#39;label&#39;</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;&#39;&gt;\n  &quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">labels</span><span class="cp">[</span><span class="nx">j</span><span class="cp">]</span> <span class="o">+</span> <span class="s2">&quot;:\n  &quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">yLabelFormat</span><span class="p">(</span><span class="n">y</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;\n&lt;/div&gt;&quot;</span><span class="p">;</span>
<a name="l-1591"></a>      <span class="p">}</span>
<a name="l-1592"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">typeof</span> <span class="nt">this</span><span class="nc">.options.hoverCallback</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1593"></a>        <span class="nb">content</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">hoverCallback</span><span class="p">(</span><span class="n">index</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">,</span> <span class="nb">content</span><span class="o">,</span> <span class="n">row</span><span class="o">.</span><span class="n">src</span><span class="p">);</span>
<a name="l-1594"></a>      <span class="p">}</span>
<a name="l-1595"></a>      <span class="nt">x</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.left</span> <span class="o">+</span> <span class="o">(</span><span class="nt">index</span> <span class="o">+</span> <span class="nt">0</span><span class="nc">.5</span><span class="o">)</span> <span class="o">*</span> <span class="nt">this</span><span class="nc">.width</span> <span class="o">/</span> <span class="nt">this</span><span class="nc">.data.length</span><span class="o">;</span>
<a name="l-1596"></a>      <span class="nt">return</span> <span class="cp">[</span><span class="nx">content</span><span class="p">,</span> <span class="nx">x</span><span class="cp">]</span><span class="o">;</span>
<a name="l-1597"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1598"></a>
<a name="l-1599"></a>    <span class="nt">Bar</span><span class="nc">.prototype.drawXAxisLabel</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">xPos</span><span class="o">,</span> <span class="nt">yPos</span><span class="o">,</span> <span class="nt">text</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1600"></a>      <span class="n">var</span> <span class="n">label</span><span class="p">;</span>
<a name="l-1601"></a>      <span class="n">return</span> <span class="n">label</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="nb">text</span><span class="p">(</span><span class="n">xPos</span><span class="o">,</span> <span class="n">yPos</span><span class="o">,</span> <span class="nb">text</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-size&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextSize</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-family&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextFamily</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-weight&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextWeight</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;fill&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">gridTextColor</span><span class="p">);</span>
<a name="l-1602"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1603"></a>
<a name="l-1604"></a>    <span class="nt">Bar</span><span class="nc">.prototype.drawBar</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">xPos</span><span class="o">,</span> <span class="nt">yPos</span><span class="o">,</span> <span class="nt">width</span><span class="o">,</span> <span class="nt">height</span><span class="o">,</span> <span class="nt">barColor</span><span class="o">,</span> <span class="nt">opacity</span><span class="o">,</span> <span class="nt">radiusArray</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1605"></a>      <span class="n">var</span> <span class="n">maxRadius</span><span class="o">,</span> <span class="n">path</span><span class="p">;</span>
<a name="l-1606"></a>      <span class="n">maxRadius</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">max</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">Math</span><span class="o">,</span> <span class="n">radiusArray</span><span class="p">);</span>
<a name="l-1607"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">maxRadius</span> <span class="o">===</span> <span class="m">0</span> <span class="o">||</span> <span class="n">maxRadius</span> <span class="o">&gt;</span> <span class="nb">height</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1608"></a>        <span class="n">path</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">rect</span><span class="p">(</span><span class="n">xPos</span><span class="o">,</span> <span class="n">yPos</span><span class="o">,</span> <span class="nb">width</span><span class="o">,</span> <span class="nb">height</span><span class="p">);</span>
<a name="l-1609"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1610"></a>        <span class="n">path</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">path</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">roundedRect</span><span class="p">(</span><span class="n">xPos</span><span class="o">,</span> <span class="n">yPos</span><span class="o">,</span> <span class="nb">width</span><span class="o">,</span> <span class="nb">height</span><span class="o">,</span> <span class="n">radiusArray</span><span class="p">));</span>
<a name="l-1611"></a>      <span class="p">}</span>
<a name="l-1612"></a>      <span class="nt">return</span> <span class="nt">path</span><span class="nc">.attr</span><span class="o">(</span><span class="s1">&#39;fill&#39;</span><span class="o">,</span> <span class="nt">barColor</span><span class="o">)</span><span class="nc">.attr</span><span class="o">(</span><span class="s1">&#39;fill-opacity&#39;</span><span class="o">,</span> <span class="nt">opacity</span><span class="o">)</span><span class="nc">.attr</span><span class="o">(</span><span class="s1">&#39;stroke&#39;</span><span class="o">,</span> <span class="s1">&#39;none&#39;</span><span class="o">);</span>
<a name="l-1613"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1614"></a>
<a name="l-1615"></a>    <span class="nt">Bar</span><span class="nc">.prototype.roundedRect</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">x</span><span class="o">,</span> <span class="nt">y</span><span class="o">,</span> <span class="nt">w</span><span class="o">,</span> <span class="nt">h</span><span class="o">,</span> <span class="nt">r</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1616"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">r</span> <span class="o">==</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1617"></a>        <span class="n">r</span> <span class="o">=</span> <span class="cp">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1618"></a>      <span class="p">}</span>
<a name="l-1619"></a>      <span class="nt">return</span> <span class="cp">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">r</span><span class="err">[</span><span class="mi">0</span><span class="cp">]</span> <span class="o">+</span> <span class="nt">y</span><span class="o">,</span> <span class="s2">&quot;Q&quot;</span><span class="o">,</span> <span class="nt">x</span><span class="o">,</span> <span class="nt">y</span><span class="o">,</span> <span class="nt">x</span> <span class="o">+</span> <span class="nt">r</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="o">,</span> <span class="nt">y</span><span class="o">,</span> <span class="s2">&quot;L&quot;</span><span class="o">,</span> <span class="nt">x</span> <span class="o">+</span> <span class="nt">w</span> <span class="nt">-</span> <span class="nt">r</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="nt">y</span><span class="o">,</span> <span class="s2">&quot;Q&quot;</span><span class="o">,</span> <span class="nt">x</span> <span class="o">+</span> <span class="nt">w</span><span class="o">,</span> <span class="nt">y</span><span class="o">,</span> <span class="nt">x</span> <span class="o">+</span> <span class="nt">w</span><span class="o">,</span> <span class="nt">y</span> <span class="o">+</span> <span class="nt">r</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="s2">&quot;L&quot;</span><span class="o">,</span> <span class="nt">x</span> <span class="o">+</span> <span class="nt">w</span><span class="o">,</span> <span class="nt">y</span> <span class="o">+</span> <span class="nt">h</span> <span class="nt">-</span> <span class="nt">r</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="s2">&quot;Q&quot;</span><span class="o">,</span> <span class="nt">x</span> <span class="o">+</span> <span class="nt">w</span><span class="o">,</span> <span class="nt">y</span> <span class="o">+</span> <span class="nt">h</span><span class="o">,</span> <span class="nt">x</span> <span class="o">+</span> <span class="nt">w</span> <span class="nt">-</span> <span class="nt">r</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="nt">y</span> <span class="o">+</span> <span class="nt">h</span><span class="o">,</span> <span class="s2">&quot;L&quot;</span><span class="o">,</span> <span class="nt">x</span> <span class="o">+</span> <span class="nt">r</span><span class="cp">[</span><span class="mi">3</span><span class="cp">]</span><span class="o">,</span> <span class="nt">y</span> <span class="o">+</span> <span class="nt">h</span><span class="o">,</span> <span class="s2">&quot;Q&quot;</span><span class="o">,</span> <span class="nt">x</span><span class="o">,</span> <span class="nt">y</span> <span class="o">+</span> <span class="nt">h</span><span class="o">,</span> <span class="nt">x</span><span class="o">,</span> <span class="nt">y</span> <span class="o">+</span> <span class="nt">h</span> <span class="nt">-</span> <span class="nt">r</span><span class="cp">[</span><span class="mi">3</span><span class="cp">]</span><span class="o">,</span> <span class="s2">&quot;Z&quot;</span><span class="o">];</span>
<a name="l-1620"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1621"></a>
<a name="l-1622"></a>    <span class="nt">return</span> <span class="nt">Bar</span><span class="o">;</span>
<a name="l-1623"></a>
<a name="l-1624"></a>  <span class="err">}</span><span class="o">)(</span><span class="nt">Morris</span><span class="nc">.Grid</span><span class="o">);</span>
<a name="l-1625"></a>
<a name="l-1626"></a>  <span class="nt">Morris</span><span class="nc">.Donut</span> <span class="o">=</span> <span class="o">(</span><span class="nt">function</span><span class="o">(</span><span class="nt">_super</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1627"></a>    <span class="n">__extends</span><span class="p">(</span><span class="n">Donut</span><span class="o">,</span> <span class="n">_super</span><span class="p">);</span>
<a name="l-1628"></a>
<a name="l-1629"></a>    <span class="n">Donut</span><span class="o">.</span><span class="n">prototype</span><span class="o">.</span><span class="n">defaults</span> <span class="o">=</span> <span class="err">{</span>
<a name="l-1630"></a>      <span class="n">colors</span><span class="o">:</span> <span class="cp">[</span><span class="s1">&#39;#0B62A4&#39;</span><span class="p">,</span> <span class="s1">&#39;#3980B5&#39;</span><span class="p">,</span> <span class="s1">&#39;#679DC6&#39;</span><span class="p">,</span> <span class="s1">&#39;#95BBD7&#39;</span><span class="p">,</span> <span class="s1">&#39;#B0CCE1&#39;</span><span class="p">,</span> <span class="s1">&#39;#095791&#39;</span><span class="p">,</span> <span class="s1">&#39;#095085&#39;</span><span class="p">,</span> <span class="s1">&#39;#083E67&#39;</span><span class="p">,</span> <span class="s1">&#39;#052C48&#39;</span><span class="p">,</span> <span class="s1">&#39;#042135&#39;</span><span class="cp">]</span><span class="o">,</span>
<a name="l-1631"></a>      <span class="n">backgroundColor</span><span class="o">:</span> <span class="s1">&#39;#FFFFFF&#39;</span><span class="o">,</span>
<a name="l-1632"></a>      <span class="n">labelColor</span><span class="o">:</span> <span class="s1">&#39;#000000&#39;</span><span class="o">,</span>
<a name="l-1633"></a>      <span class="n">formatter</span><span class="o">:</span> <span class="n">Morris</span><span class="o">.</span><span class="n">commas</span><span class="o">,</span>
<a name="l-1634"></a>      <span class="n">resize</span><span class="o">:</span> <span class="n">false</span>
<a name="l-1635"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1636"></a>
<a name="l-1637"></a>    <span class="nt">function</span> <span class="nt">Donut</span><span class="o">(</span><span class="nt">options</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1638"></a>      <span class="n">this</span><span class="o">.</span><span class="n">resizeHandler</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">resizeHandler</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-1639"></a>      <span class="n">this</span><span class="o">.</span><span class="n">select</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">select</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-1640"></a>      <span class="n">this</span><span class="o">.</span><span class="n">click</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">click</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-1641"></a>      <span class="n">var</span> <span class="n">_this</span> <span class="o">=</span> <span class="n">this</span><span class="p">;</span>
<a name="l-1642"></a>      <span class="n">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="n">this</span> <span class="n">instanceof</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Donut</span><span class="p">))</span> <span class="err">{</span>
<a name="l-1643"></a>        <span class="n">return</span> <span class="n">new</span> <span class="n">Morris</span><span class="o">.</span><span class="n">Donut</span><span class="p">(</span><span class="n">options</span><span class="p">);</span>
<a name="l-1644"></a>      <span class="p">}</span>
<a name="l-1645"></a>      <span class="nt">this</span><span class="nc">.options</span> <span class="o">=</span> <span class="o">$</span><span class="nc">.extend</span><span class="o">(</span><span class="p">{}</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.defaults</span><span class="o">,</span> <span class="nt">options</span><span class="o">);</span>
<a name="l-1646"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">typeof</span> <span class="nt">options</span><span class="nc">.element</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1647"></a>        <span class="n">this</span><span class="o">.</span><span class="n">el</span> <span class="o">=</span> <span class="err">$</span><span class="p">(</span><span class="n">document</span><span class="o">.</span><span class="n">getElementById</span><span class="p">(</span><span class="n">options</span><span class="o">.</span><span class="n">element</span><span class="p">));</span>
<a name="l-1648"></a>      <span class="p">}</span> <span class="nt">else</span> <span class="p">{</span>
<a name="l-1649"></a>        <span class="n">this</span><span class="o">.</span><span class="n">el</span> <span class="o">=</span> <span class="err">$</span><span class="p">(</span><span class="n">options</span><span class="o">.</span><span class="n">element</span><span class="p">);</span>
<a name="l-1650"></a>      <span class="p">}</span>
<a name="l-1651"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.el</span> <span class="o">===</span> <span class="nt">null</span> <span class="o">||</span> <span class="nt">this</span><span class="nc">.el.length</span> <span class="o">===</span> <span class="nt">0</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1652"></a>        <span class="n">throw</span> <span class="n">new</span> <span class="n">Error</span><span class="p">(</span><span class="s2">&quot;Graph placeholder not found.&quot;</span><span class="p">);</span>
<a name="l-1653"></a>      <span class="p">}</span>
<a name="l-1654"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">options</span><span class="nc">.data</span> <span class="o">===</span> <span class="nt">void</span> <span class="nt">0</span> <span class="o">||</span> <span class="nt">options</span><span class="nc">.data.length</span> <span class="o">===</span> <span class="nt">0</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1655"></a>        <span class="n">return</span><span class="p">;</span>
<a name="l-1656"></a>      <span class="p">}</span>
<a name="l-1657"></a>      <span class="nt">this</span><span class="nc">.raphael</span> <span class="o">=</span> <span class="nt">new</span> <span class="nt">Raphael</span><span class="o">(</span><span class="nt">this</span><span class="nc">.el</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="o">);</span>
<a name="l-1658"></a>      <span class="nt">if</span> <span class="o">(</span><span class="nt">this</span><span class="nc">.options.resize</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1659"></a>        <span class="err">$</span><span class="p">(</span><span class="n">window</span><span class="p">)</span><span class="o">.</span><span class="n">bind</span><span class="p">(</span><span class="s1">&#39;resize&#39;</span><span class="o">,</span> <span class="n">function</span><span class="p">(</span><span class="n">evt</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1660"></a>          <span class="n">if</span> <span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">timeoutId</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1661"></a>            <span class="n">window</span><span class="o">.</span><span class="n">clearTimeout</span><span class="p">(</span><span class="n">_this</span><span class="o">.</span><span class="n">timeoutId</span><span class="p">);</span>
<a name="l-1662"></a>          <span class="p">}</span>
<a name="l-1663"></a>          <span class="nt">return</span> <span class="nt">_this</span><span class="nc">.timeoutId</span> <span class="o">=</span> <span class="nt">window</span><span class="nc">.setTimeout</span><span class="o">(</span><span class="nt">_this</span><span class="nc">.resizeHandler</span><span class="o">,</span> <span class="nt">100</span><span class="o">);</span>
<a name="l-1664"></a>        <span class="err">}</span><span class="o">);</span>
<a name="l-1665"></a>      <span class="err">}</span>
<a name="l-1666"></a>      <span class="nt">this</span><span class="nc">.setData</span><span class="o">(</span><span class="nt">options</span><span class="nc">.data</span><span class="o">);</span>
<a name="l-1667"></a>    <span class="err">}</span>
<a name="l-1668"></a>
<a name="l-1669"></a>    <span class="nt">Donut</span><span class="nc">.prototype.redraw</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1670"></a>      <span class="n">var</span> <span class="n">C</span><span class="o">,</span> <span class="n">cx</span><span class="o">,</span> <span class="n">cy</span><span class="o">,</span> <span class="n">i</span><span class="o">,</span> <span class="n">idx</span><span class="o">,</span> <span class="n">last</span><span class="o">,</span> <span class="n">max_value</span><span class="o">,</span> <span class="n">min</span><span class="o">,</span> <span class="n">next</span><span class="o">,</span> <span class="n">seg</span><span class="o">,</span> <span class="n">total</span><span class="o">,</span> <span class="n">value</span><span class="o">,</span> <span class="n">w</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_j</span><span class="o">,</span> <span class="n">_k</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_len1</span><span class="o">,</span> <span class="n">_len2</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_ref1</span><span class="o">,</span> <span class="n">_ref2</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-1671"></a>      <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="nb">clear</span><span class="p">();</span>
<a name="l-1672"></a>      <span class="n">cx</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">width</span><span class="p">()</span> <span class="o">/</span> <span class="m">2</span><span class="p">;</span>
<a name="l-1673"></a>      <span class="n">cy</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">height</span><span class="p">()</span> <span class="o">/</span> <span class="m">2</span><span class="p">;</span>
<a name="l-1674"></a>      <span class="n">w</span> <span class="o">=</span> <span class="p">(</span><span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">cx</span><span class="o">,</span> <span class="n">cy</span><span class="p">)</span> <span class="o">-</span> <span class="m">10</span><span class="p">)</span> <span class="o">/</span> <span class="m">3</span><span class="p">;</span>
<a name="l-1675"></a>      <span class="n">total</span> <span class="o">=</span> <span class="m">0</span><span class="p">;</span>
<a name="l-1676"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">values</span><span class="p">;</span>
<a name="l-1677"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1678"></a>        <span class="n">value</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1679"></a>        <span class="n">total</span> <span class="o">+=</span> <span class="n">value</span><span class="p">;</span>
<a name="l-1680"></a>      <span class="p">}</span>
<a name="l-1681"></a>      <span class="nt">min</span> <span class="o">=</span> <span class="nt">5</span> <span class="o">/</span> <span class="o">(</span><span class="nt">2</span> <span class="o">*</span> <span class="nt">w</span><span class="o">);</span>
<a name="l-1682"></a>      <span class="nt">C</span> <span class="o">=</span> <span class="nt">1</span><span class="nc">.9999</span> <span class="o">*</span> <span class="nt">Math</span><span class="nc">.PI</span> <span class="nt">-</span> <span class="nt">min</span> <span class="o">*</span> <span class="nt">this</span><span class="nc">.data.length</span><span class="o">;</span>
<a name="l-1683"></a>      <span class="nt">last</span> <span class="o">=</span> <span class="nt">0</span><span class="o">;</span>
<a name="l-1684"></a>      <span class="nt">idx</span> <span class="o">=</span> <span class="nt">0</span><span class="o">;</span>
<a name="l-1685"></a>      <span class="nt">this</span><span class="nc">.segments</span> <span class="o">=</span> <span class="cp">[]</span><span class="o">;</span>
<a name="l-1686"></a>      <span class="nt">_ref1</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.values</span><span class="o">;</span>
<a name="l-1687"></a>      <span class="nt">for</span> <span class="o">(</span><span class="nt">i</span> <span class="o">=</span> <span class="nt">_j</span> <span class="o">=</span> <span class="nt">0</span><span class="o">,</span> <span class="nt">_len1</span> <span class="o">=</span> <span class="nt">_ref1</span><span class="nc">.length</span><span class="o">;</span> <span class="nt">_j</span> <span class="o">&lt;</span> <span class="nt">_len1</span><span class="o">;</span> <span class="nt">i</span> <span class="o">=</span> <span class="o">++</span><span class="nt">_j</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1688"></a>        <span class="n">value</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1689"></a>        <span class="n">next</span> <span class="o">=</span> <span class="n">last</span> <span class="o">+</span> <span class="n">min</span> <span class="o">+</span> <span class="n">C</span> <span class="o">*</span> <span class="p">(</span><span class="n">value</span> <span class="o">/</span> <span class="n">total</span><span class="p">);</span>
<a name="l-1690"></a>        <span class="n">seg</span> <span class="o">=</span> <span class="n">new</span> <span class="n">Morris</span><span class="o">.</span><span class="n">DonutSegment</span><span class="p">(</span><span class="n">cx</span><span class="o">,</span> <span class="n">cy</span><span class="o">,</span> <span class="n">w</span> <span class="o">*</span> <span class="m">2</span><span class="o">,</span> <span class="n">w</span><span class="o">,</span> <span class="n">last</span><span class="o">,</span> <span class="n">next</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">i</span><span class="cp">]</span><span class="o">.</span><span class="nb">color</span> <span class="o">||</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">colors</span><span class="cp">[</span><span class="nx">idx</span> <span class="o">%</span> <span class="nx">this.options.colors.length</span><span class="cp">]</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">options</span><span class="o">.</span><span class="n">backgroundColor</span><span class="o">,</span> <span class="n">idx</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="p">);</span>
<a name="l-1691"></a>        <span class="n">seg</span><span class="o">.</span><span class="n">render</span><span class="p">();</span>
<a name="l-1692"></a>        <span class="n">this</span><span class="o">.</span><span class="n">segments</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">seg</span><span class="p">);</span>
<a name="l-1693"></a>        <span class="n">seg</span><span class="o">.</span><span class="n">on</span><span class="p">(</span><span class="s1">&#39;hover&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">select</span><span class="p">);</span>
<a name="l-1694"></a>        <span class="n">seg</span><span class="o">.</span><span class="n">on</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">click</span><span class="p">);</span>
<a name="l-1695"></a>        <span class="n">last</span> <span class="o">=</span> <span class="n">next</span><span class="p">;</span>
<a name="l-1696"></a>        <span class="n">idx</span> <span class="o">+=</span> <span class="m">1</span><span class="p">;</span>
<a name="l-1697"></a>      <span class="p">}</span>
<a name="l-1698"></a>      <span class="nt">this</span><span class="nc">.text1</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.drawEmptyDonutLabel</span><span class="o">(</span><span class="nt">cx</span><span class="o">,</span> <span class="nt">cy</span> <span class="nt">-</span> <span class="nt">10</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.options.labelColor</span><span class="o">,</span> <span class="nt">15</span><span class="o">,</span> <span class="nt">800</span><span class="o">);</span>
<a name="l-1699"></a>      <span class="nt">this</span><span class="nc">.text2</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.drawEmptyDonutLabel</span><span class="o">(</span><span class="nt">cx</span><span class="o">,</span> <span class="nt">cy</span> <span class="o">+</span> <span class="nt">10</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.options.labelColor</span><span class="o">,</span> <span class="nt">14</span><span class="o">);</span>
<a name="l-1700"></a>      <span class="nt">max_value</span> <span class="o">=</span> <span class="nt">Math</span><span class="nc">.max.apply</span><span class="o">(</span><span class="nt">Math</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.values</span><span class="o">);</span>
<a name="l-1701"></a>      <span class="nt">idx</span> <span class="o">=</span> <span class="nt">0</span><span class="o">;</span>
<a name="l-1702"></a>      <span class="nt">_ref2</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.values</span><span class="o">;</span>
<a name="l-1703"></a>      <span class="nt">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="o">;</span>
<a name="l-1704"></a>      <span class="nt">for</span> <span class="o">(</span><span class="nt">_k</span> <span class="o">=</span> <span class="nt">0</span><span class="o">,</span> <span class="nt">_len2</span> <span class="o">=</span> <span class="nt">_ref2</span><span class="nc">.length</span><span class="o">;</span> <span class="nt">_k</span> <span class="o">&lt;</span> <span class="nt">_len2</span><span class="o">;</span> <span class="nt">_k</span><span class="o">++)</span> <span class="p">{</span>
<a name="l-1705"></a>        <span class="n">value</span> <span class="o">=</span> <span class="n">_ref2</span><span class="cp">[</span><span class="nx">_k</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1706"></a>        <span class="n">if</span> <span class="p">(</span><span class="n">value</span> <span class="o">===</span> <span class="n">max_value</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1707"></a>          <span class="n">this</span><span class="o">.</span><span class="n">select</span><span class="p">(</span><span class="n">idx</span><span class="p">);</span>
<a name="l-1708"></a>          <span class="n">break</span><span class="p">;</span>
<a name="l-1709"></a>        <span class="p">}</span>
<a name="l-1710"></a>        <span class="nt">_results</span><span class="nc">.push</span><span class="o">(</span><span class="nt">idx</span> <span class="o">+=</span> <span class="nt">1</span><span class="o">);</span>
<a name="l-1711"></a>      <span class="err">}</span>
<a name="l-1712"></a>      <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-1713"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1714"></a>
<a name="l-1715"></a>    <span class="nt">Donut</span><span class="nc">.prototype.setData</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">data</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1716"></a>      <span class="n">var</span> <span class="n">row</span><span class="p">;</span>
<a name="l-1717"></a>      <span class="n">this</span><span class="o">.</span><span class="n">data</span> <span class="o">=</span> <span class="n">data</span><span class="p">;</span>
<a name="l-1718"></a>      <span class="n">this</span><span class="o">.</span><span class="n">values</span> <span class="o">=</span> <span class="p">(</span><span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-1719"></a>        <span class="n">var</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_results</span><span class="p">;</span>
<a name="l-1720"></a>        <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="p">;</span>
<a name="l-1721"></a>        <span class="n">_results</span> <span class="o">=</span> <span class="cp">[]</span><span class="p">;</span>
<a name="l-1722"></a>        <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1723"></a>          <span class="n">row</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1724"></a>          <span class="n">_results</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">parseFloat</span><span class="p">(</span><span class="n">row</span><span class="o">.</span><span class="n">value</span><span class="p">));</span>
<a name="l-1725"></a>        <span class="p">}</span>
<a name="l-1726"></a>        <span class="nt">return</span> <span class="nt">_results</span><span class="o">;</span>
<a name="l-1727"></a>      <span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
<a name="l-1728"></a>      <span class="nt">return</span> <span class="nt">this</span><span class="nc">.redraw</span><span class="o">();</span>
<a name="l-1729"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1730"></a>
<a name="l-1731"></a>    <span class="nt">Donut</span><span class="nc">.prototype.click</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">idx</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1732"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">fire</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="o">,</span> <span class="n">idx</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">data</span><span class="cp">[</span><span class="nx">idx</span><span class="cp">]</span><span class="p">);</span>
<a name="l-1733"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1734"></a>
<a name="l-1735"></a>    <span class="nt">Donut</span><span class="nc">.prototype.select</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">idx</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1736"></a>      <span class="n">var</span> <span class="n">row</span><span class="o">,</span> <span class="n">s</span><span class="o">,</span> <span class="n">segment</span><span class="o">,</span> <span class="n">_i</span><span class="o">,</span> <span class="n">_len</span><span class="o">,</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-1737"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">segments</span><span class="p">;</span>
<a name="l-1738"></a>      <span class="n">for</span> <span class="p">(</span><span class="n">_i</span> <span class="o">=</span> <span class="m">0</span><span class="o">,</span> <span class="n">_len</span> <span class="o">=</span> <span class="n">_ref</span><span class="o">.</span><span class="n">length</span><span class="p">;</span> <span class="n">_i</span> <span class="o">&lt;</span> <span class="n">_len</span><span class="p">;</span> <span class="n">_i</span><span class="o">++</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1739"></a>        <span class="n">s</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="nx">_i</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1740"></a>        <span class="n">s</span><span class="o">.</span><span class="n">deselect</span><span class="p">();</span>
<a name="l-1741"></a>      <span class="p">}</span>
<a name="l-1742"></a>      <span class="nt">segment</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.segments</span><span class="cp">[</span><span class="nx">idx</span><span class="cp">]</span><span class="o">;</span>
<a name="l-1743"></a>      <span class="nt">segment</span><span class="nc">.select</span><span class="o">();</span>
<a name="l-1744"></a>      <span class="nt">row</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.data</span><span class="cp">[</span><span class="nx">idx</span><span class="cp">]</span><span class="o">;</span>
<a name="l-1745"></a>      <span class="nt">return</span> <span class="nt">this</span><span class="nc">.setLabels</span><span class="o">(</span><span class="nt">row</span><span class="nc">.label</span><span class="o">,</span> <span class="nt">this</span><span class="nc">.options.formatter</span><span class="o">(</span><span class="nt">row</span><span class="nc">.value</span><span class="o">,</span> <span class="nt">row</span><span class="o">));</span>
<a name="l-1746"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1747"></a>
<a name="l-1748"></a>    <span class="nt">Donut</span><span class="nc">.prototype.setLabels</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">label1</span><span class="o">,</span> <span class="nt">label2</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1749"></a>      <span class="n">var</span> <span class="n">inner</span><span class="o">,</span> <span class="n">maxHeightBottom</span><span class="o">,</span> <span class="n">maxHeightTop</span><span class="o">,</span> <span class="n">maxWidth</span><span class="o">,</span> <span class="n">text1bbox</span><span class="o">,</span> <span class="n">text1scale</span><span class="o">,</span> <span class="n">text2bbox</span><span class="o">,</span> <span class="n">text2scale</span><span class="p">;</span>
<a name="l-1750"></a>      <span class="n">inner</span> <span class="o">=</span> <span class="p">(</span><span class="n">Math</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">width</span><span class="p">()</span> <span class="o">/</span> <span class="m">2</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">height</span><span class="p">()</span> <span class="o">/</span> <span class="m">2</span><span class="p">)</span> <span class="o">-</span> <span class="m">10</span><span class="p">)</span> <span class="o">*</span> <span class="m">2</span> <span class="o">/</span> <span class="m">3</span><span class="p">;</span>
<a name="l-1751"></a>      <span class="n">maxWidth</span> <span class="o">=</span> <span class="m">1</span><span class="o">.</span><span class="m">8</span> <span class="o">*</span> <span class="n">inner</span><span class="p">;</span>
<a name="l-1752"></a>      <span class="n">maxHeightTop</span> <span class="o">=</span> <span class="n">inner</span> <span class="o">/</span> <span class="m">2</span><span class="p">;</span>
<a name="l-1753"></a>      <span class="n">maxHeightBottom</span> <span class="o">=</span> <span class="n">inner</span> <span class="o">/</span> <span class="m">3</span><span class="p">;</span>
<a name="l-1754"></a>      <span class="n">this</span><span class="o">.</span><span class="n">text1</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="err">{</span>
<a name="l-1755"></a>        <span class="nb">text</span><span class="o">:</span> <span class="n">label1</span><span class="o">,</span>
<a name="l-1756"></a>        <span class="n">transform</span><span class="o">:</span> <span class="s1">&#39;&#39;</span>
<a name="l-1757"></a>      <span class="p">}</span><span class="o">);</span>
<a name="l-1758"></a>      <span class="nt">text1bbox</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.text1.getBBox</span><span class="o">();</span>
<a name="l-1759"></a>      <span class="nt">text1scale</span> <span class="o">=</span> <span class="nt">Math</span><span class="nc">.min</span><span class="o">(</span><span class="nt">maxWidth</span> <span class="o">/</span> <span class="nt">text1bbox</span><span class="nc">.width</span><span class="o">,</span> <span class="nt">maxHeightTop</span> <span class="o">/</span> <span class="nt">text1bbox</span><span class="nc">.height</span><span class="o">);</span>
<a name="l-1760"></a>      <span class="nt">this</span><span class="nc">.text1.attr</span><span class="o">(</span><span class="p">{</span>
<a name="l-1761"></a>        <span class="n">transform</span><span class="o">:</span> <span class="s2">&quot;S&quot;</span> <span class="o">+</span> <span class="n">text1scale</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">text1scale</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">text1bbox</span><span class="o">.</span><span class="n">x</span> <span class="o">+</span> <span class="n">text1bbox</span><span class="o">.</span><span class="nb">width</span> <span class="o">/</span> <span class="m">2</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">text1bbox</span><span class="o">.</span><span class="n">y</span> <span class="o">+</span> <span class="n">text1bbox</span><span class="o">.</span><span class="nb">height</span><span class="p">)</span>
<a name="l-1762"></a>      <span class="p">}</span><span class="o">);</span>
<a name="l-1763"></a>      <span class="nt">this</span><span class="nc">.text2.attr</span><span class="o">(</span><span class="p">{</span>
<a name="l-1764"></a>        <span class="nb">text</span><span class="o">:</span> <span class="n">label2</span><span class="o">,</span>
<a name="l-1765"></a>        <span class="n">transform</span><span class="o">:</span> <span class="s1">&#39;&#39;</span>
<a name="l-1766"></a>      <span class="p">}</span><span class="o">);</span>
<a name="l-1767"></a>      <span class="nt">text2bbox</span> <span class="o">=</span> <span class="nt">this</span><span class="nc">.text2.getBBox</span><span class="o">();</span>
<a name="l-1768"></a>      <span class="nt">text2scale</span> <span class="o">=</span> <span class="nt">Math</span><span class="nc">.min</span><span class="o">(</span><span class="nt">maxWidth</span> <span class="o">/</span> <span class="nt">text2bbox</span><span class="nc">.width</span><span class="o">,</span> <span class="nt">maxHeightBottom</span> <span class="o">/</span> <span class="nt">text2bbox</span><span class="nc">.height</span><span class="o">);</span>
<a name="l-1769"></a>      <span class="nt">return</span> <span class="nt">this</span><span class="nc">.text2.attr</span><span class="o">(</span><span class="p">{</span>
<a name="l-1770"></a>        <span class="n">transform</span><span class="o">:</span> <span class="s2">&quot;S&quot;</span> <span class="o">+</span> <span class="n">text2scale</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">text2scale</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="n">text2bbox</span><span class="o">.</span><span class="n">x</span> <span class="o">+</span> <span class="n">text2bbox</span><span class="o">.</span><span class="nb">width</span> <span class="o">/</span> <span class="m">2</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">text2bbox</span><span class="o">.</span><span class="n">y</span>
<a name="l-1771"></a>      <span class="p">}</span><span class="o">);</span>
<a name="l-1772"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1773"></a>
<a name="l-1774"></a>    <span class="nt">Donut</span><span class="nc">.prototype.drawEmptyDonutLabel</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">xPos</span><span class="o">,</span> <span class="nt">yPos</span><span class="o">,</span> <span class="nt">color</span><span class="o">,</span> <span class="nt">fontSize</span><span class="o">,</span> <span class="nt">fontWeight</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1775"></a>      <span class="n">var</span> <span class="nb">text</span><span class="p">;</span>
<a name="l-1776"></a>      <span class="nb">text</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="nb">text</span><span class="p">(</span><span class="n">xPos</span><span class="o">,</span> <span class="n">yPos</span><span class="o">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-size&#39;</span><span class="o">,</span> <span class="n">fontSize</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;fill&#39;</span><span class="o">,</span> <span class="nb">color</span><span class="p">);</span>
<a name="l-1777"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">fontWeight</span> <span class="o">!=</span> <span class="n">null</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1778"></a>        <span class="nb">text</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="s1">&#39;font-weight&#39;</span><span class="o">,</span> <span class="n">fontWeight</span><span class="p">);</span>
<a name="l-1779"></a>      <span class="p">}</span>
<a name="l-1780"></a>      <span class="nt">return</span> <span class="nt">text</span><span class="o">;</span>
<a name="l-1781"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1782"></a>
<a name="l-1783"></a>    <span class="nt">Donut</span><span class="nc">.prototype.resizeHandler</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1784"></a>      <span class="n">this</span><span class="o">.</span><span class="n">timeoutId</span> <span class="o">=</span> <span class="n">null</span><span class="p">;</span>
<a name="l-1785"></a>      <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">setSize</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">width</span><span class="p">()</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">el</span><span class="o">.</span><span class="nb">height</span><span class="p">());</span>
<a name="l-1786"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">redraw</span><span class="p">();</span>
<a name="l-1787"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1788"></a>
<a name="l-1789"></a>    <span class="nt">return</span> <span class="nt">Donut</span><span class="o">;</span>
<a name="l-1790"></a>
<a name="l-1791"></a>  <span class="err">}</span><span class="o">)(</span><span class="nt">Morris</span><span class="nc">.EventEmitter</span><span class="o">);</span>
<a name="l-1792"></a>
<a name="l-1793"></a>  <span class="nt">Morris</span><span class="nc">.DonutSegment</span> <span class="o">=</span> <span class="o">(</span><span class="nt">function</span><span class="o">(</span><span class="nt">_super</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1794"></a>    <span class="n">__extends</span><span class="p">(</span><span class="n">DonutSegment</span><span class="o">,</span> <span class="n">_super</span><span class="p">);</span>
<a name="l-1795"></a>
<a name="l-1796"></a>    <span class="n">function</span> <span class="n">DonutSegment</span><span class="p">(</span><span class="n">cx</span><span class="o">,</span> <span class="n">cy</span><span class="o">,</span> <span class="n">inner</span><span class="o">,</span> <span class="n">outer</span><span class="o">,</span> <span class="n">p0</span><span class="o">,</span> <span class="n">p1</span><span class="o">,</span> <span class="nb">color</span><span class="o">,</span> <span class="n">backgroundColor</span><span class="o">,</span> <span class="n">index</span><span class="o">,</span> <span class="n">raphael</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1797"></a>      <span class="n">this</span><span class="o">.</span><span class="n">cx</span> <span class="o">=</span> <span class="n">cx</span><span class="p">;</span>
<a name="l-1798"></a>      <span class="n">this</span><span class="o">.</span><span class="n">cy</span> <span class="o">=</span> <span class="n">cy</span><span class="p">;</span>
<a name="l-1799"></a>      <span class="n">this</span><span class="o">.</span><span class="n">inner</span> <span class="o">=</span> <span class="n">inner</span><span class="p">;</span>
<a name="l-1800"></a>      <span class="n">this</span><span class="o">.</span><span class="n">outer</span> <span class="o">=</span> <span class="n">outer</span><span class="p">;</span>
<a name="l-1801"></a>      <span class="n">this</span><span class="o">.</span><span class="nb">color</span> <span class="o">=</span> <span class="nb">color</span><span class="p">;</span>
<a name="l-1802"></a>      <span class="n">this</span><span class="o">.</span><span class="n">backgroundColor</span> <span class="o">=</span> <span class="n">backgroundColor</span><span class="p">;</span>
<a name="l-1803"></a>      <span class="n">this</span><span class="o">.</span><span class="n">index</span> <span class="o">=</span> <span class="n">index</span><span class="p">;</span>
<a name="l-1804"></a>      <span class="n">this</span><span class="o">.</span><span class="n">raphael</span> <span class="o">=</span> <span class="n">raphael</span><span class="p">;</span>
<a name="l-1805"></a>      <span class="n">this</span><span class="o">.</span><span class="n">deselect</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">deselect</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-1806"></a>      <span class="n">this</span><span class="o">.</span><span class="n">select</span> <span class="o">=</span> <span class="n">__bind</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">select</span><span class="o">,</span> <span class="n">this</span><span class="p">);</span>
<a name="l-1807"></a>      <span class="n">this</span><span class="o">.</span><span class="n">sin_p0</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">sin</span><span class="p">(</span><span class="n">p0</span><span class="p">);</span>
<a name="l-1808"></a>      <span class="n">this</span><span class="o">.</span><span class="n">cos_p0</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">cos</span><span class="p">(</span><span class="n">p0</span><span class="p">);</span>
<a name="l-1809"></a>      <span class="n">this</span><span class="o">.</span><span class="n">sin_p1</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">sin</span><span class="p">(</span><span class="n">p1</span><span class="p">);</span>
<a name="l-1810"></a>      <span class="n">this</span><span class="o">.</span><span class="n">cos_p1</span> <span class="o">=</span> <span class="n">Math</span><span class="o">.</span><span class="n">cos</span><span class="p">(</span><span class="n">p1</span><span class="p">);</span>
<a name="l-1811"></a>      <span class="n">this</span><span class="o">.</span><span class="n">is_long</span> <span class="o">=</span> <span class="p">(</span><span class="n">p1</span> <span class="o">-</span> <span class="n">p0</span><span class="p">)</span> <span class="o">&gt;</span> <span class="n">Math</span><span class="o">.</span><span class="n">PI</span> <span class="o">?</span> <span class="m">1</span> <span class="o">:</span> <span class="m">0</span><span class="p">;</span>
<a name="l-1812"></a>      <span class="n">this</span><span class="o">.</span><span class="n">path</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">calcSegment</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">inner</span> <span class="o">+</span> <span class="m">3</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">inner</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">outer</span> <span class="o">-</span> <span class="m">5</span><span class="p">);</span>
<a name="l-1813"></a>      <span class="n">this</span><span class="o">.</span><span class="n">selectedPath</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">calcSegment</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">inner</span> <span class="o">+</span> <span class="m">3</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">inner</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">outer</span><span class="p">);</span>
<a name="l-1814"></a>      <span class="n">this</span><span class="o">.</span><span class="n">hilight</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">calcArc</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">inner</span><span class="p">);</span>
<a name="l-1815"></a>    <span class="p">}</span>
<a name="l-1816"></a>
<a name="l-1817"></a>    <span class="nt">DonutSegment</span><span class="nc">.prototype.calcArcPoints</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">r</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1818"></a>      <span class="n">return</span> <span class="cp">[</span><span class="nx">this.cx</span> <span class="o">+</span> <span class="nx">r</span> <span class="o">*</span> <span class="nx">this.sin_p0</span><span class="p">,</span> <span class="nx">this.cy</span> <span class="o">+</span> <span class="nx">r</span> <span class="o">*</span> <span class="nx">this.cos_p0</span><span class="p">,</span> <span class="nx">this.cx</span> <span class="o">+</span> <span class="nx">r</span> <span class="o">*</span> <span class="nx">this.sin_p1</span><span class="p">,</span> <span class="nx">this.cy</span> <span class="o">+</span> <span class="nx">r</span> <span class="o">*</span> <span class="nx">this.cos_p1</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1819"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1820"></a>
<a name="l-1821"></a>    <span class="nt">DonutSegment</span><span class="nc">.prototype.calcSegment</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">r1</span><span class="o">,</span> <span class="nt">r2</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1822"></a>      <span class="n">var</span> <span class="n">ix0</span><span class="o">,</span> <span class="n">ix1</span><span class="o">,</span> <span class="n">iy0</span><span class="o">,</span> <span class="n">iy1</span><span class="o">,</span> <span class="n">ox0</span><span class="o">,</span> <span class="n">ox1</span><span class="o">,</span> <span class="n">oy0</span><span class="o">,</span> <span class="n">oy1</span><span class="o">,</span> <span class="n">_ref</span><span class="o">,</span> <span class="n">_ref1</span><span class="p">;</span>
<a name="l-1823"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">calcArcPoints</span><span class="p">(</span><span class="n">r1</span><span class="p">)</span><span class="o">,</span> <span class="n">ix0</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="o">,</span> <span class="n">iy0</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="n">ix1</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="n">iy1</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="mi">3</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1824"></a>      <span class="n">_ref1</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">calcArcPoints</span><span class="p">(</span><span class="n">r2</span><span class="p">)</span><span class="o">,</span> <span class="n">ox0</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="o">,</span> <span class="n">oy0</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="n">ox1</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="n">oy1</span> <span class="o">=</span> <span class="n">_ref1</span><span class="cp">[</span><span class="mi">3</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1825"></a>      <span class="n">return</span> <span class="p">(</span><span class="s2">&quot;M&quot;</span> <span class="o">+</span> <span class="n">ix0</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">iy0</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="s2">&quot;A&quot;</span> <span class="o">+</span> <span class="n">r1</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">r1</span> <span class="o">+</span> <span class="s2">&quot;,0,&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">is_long</span> <span class="o">+</span> <span class="s2">&quot;,0,&quot;</span> <span class="o">+</span> <span class="n">ix1</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">iy1</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="s2">&quot;L&quot;</span> <span class="o">+</span> <span class="n">ox1</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">oy1</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="s2">&quot;A&quot;</span> <span class="o">+</span> <span class="n">r2</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">r2</span> <span class="o">+</span> <span class="s2">&quot;,0,&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">is_long</span> <span class="o">+</span> <span class="s2">&quot;,1,&quot;</span> <span class="o">+</span> <span class="n">ox0</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">oy0</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;Z&quot;</span><span class="p">;</span>
<a name="l-1826"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1827"></a>
<a name="l-1828"></a>    <span class="nt">DonutSegment</span><span class="nc">.prototype.calcArc</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">r</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1829"></a>      <span class="n">var</span> <span class="n">ix0</span><span class="o">,</span> <span class="n">ix1</span><span class="o">,</span> <span class="n">iy0</span><span class="o">,</span> <span class="n">iy1</span><span class="o">,</span> <span class="n">_ref</span><span class="p">;</span>
<a name="l-1830"></a>      <span class="n">_ref</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">calcArcPoints</span><span class="p">(</span><span class="n">r</span><span class="p">)</span><span class="o">,</span> <span class="n">ix0</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="mi">0</span><span class="cp">]</span><span class="o">,</span> <span class="n">iy0</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="mi">1</span><span class="cp">]</span><span class="o">,</span> <span class="n">ix1</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="mi">2</span><span class="cp">]</span><span class="o">,</span> <span class="n">iy1</span> <span class="o">=</span> <span class="n">_ref</span><span class="cp">[</span><span class="mi">3</span><span class="cp">]</span><span class="p">;</span>
<a name="l-1831"></a>      <span class="n">return</span> <span class="p">(</span><span class="s2">&quot;M&quot;</span> <span class="o">+</span> <span class="n">ix0</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">iy0</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="s2">&quot;A&quot;</span> <span class="o">+</span> <span class="n">r</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">r</span> <span class="o">+</span> <span class="s2">&quot;,0,&quot;</span> <span class="o">+</span> <span class="n">this</span><span class="o">.</span><span class="n">is_long</span> <span class="o">+</span> <span class="s2">&quot;,0,&quot;</span> <span class="o">+</span> <span class="n">ix1</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="n">iy1</span><span class="p">);</span>
<a name="l-1832"></a>    <span class="p">}</span><span class="o">;</span>
<a name="l-1833"></a>
<a name="l-1834"></a>    <span class="nt">DonutSegment</span><span class="nc">.prototype.render</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1835"></a>      <span class="n">var</span> <span class="n">_this</span> <span class="o">=</span> <span class="n">this</span><span class="p">;</span>
<a name="l-1836"></a>      <span class="n">this</span><span class="o">.</span><span class="n">arc</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">drawDonutArc</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">hilight</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="nb">color</span><span class="p">);</span>
<a name="l-1837"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">seg</span> <span class="o">=</span> <span class="n">this</span><span class="o">.</span><span class="n">drawDonutSegment</span><span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">path</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="nb">color</span><span class="o">,</span> <span class="n">this</span><span class="o">.</span><span class="n">backgroundColor</span><span class="o">,</span> <span class="n">function</span><span class="p">()</span> <span class="err">{</span>
<a name="l-1838"></a>        <span class="n">return</span> <span class="n">_this</span><span class="o">.</span><span class="n">fire</span><span class="p">(</span><span class="s1">&#39;hover&#39;</span><span class="o">,</span> <span class="n">_this</span><span class="o">.</span><span class="n">index</span><span class="p">);</span>
<a name="l-1839"></a>      <span class="p">}</span><span class="o">,</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1840"></a>        <span class="n">return</span> <span class="n">_this</span><span class="o">.</span><span class="n">fire</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="o">,</span> <span class="n">_this</span><span class="o">.</span><span class="n">index</span><span class="p">);</span>
<a name="l-1841"></a>      <span class="p">}</span><span class="o">);</span>
<a name="l-1842"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1843"></a>
<a name="l-1844"></a>    <span class="nt">DonutSegment</span><span class="nc">.prototype.drawDonutArc</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">path</span><span class="o">,</span> <span class="nt">color</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1845"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">path</span><span class="p">(</span><span class="n">path</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="err">{</span>
<a name="l-1846"></a>        <span class="n">stroke</span><span class="o">:</span> <span class="nb">color</span><span class="o">,</span>
<a name="l-1847"></a>        <span class="s1">&#39;stroke-width&#39;</span><span class="o">:</span> <span class="m">2</span><span class="o">,</span>
<a name="l-1848"></a>        <span class="nb">opacity</span><span class="o">:</span> <span class="m">0</span>
<a name="l-1849"></a>      <span class="p">}</span><span class="o">);</span>
<a name="l-1850"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1851"></a>
<a name="l-1852"></a>    <span class="nt">DonutSegment</span><span class="nc">.prototype.drawDonutSegment</span> <span class="o">=</span> <span class="nt">function</span><span class="o">(</span><span class="nt">path</span><span class="o">,</span> <span class="nt">fillColor</span><span class="o">,</span> <span class="nt">strokeColor</span><span class="o">,</span> <span class="nt">hoverFunction</span><span class="o">,</span> <span class="nt">clickFunction</span><span class="o">)</span> <span class="p">{</span>
<a name="l-1853"></a>      <span class="n">return</span> <span class="n">this</span><span class="o">.</span><span class="n">raphael</span><span class="o">.</span><span class="n">path</span><span class="p">(</span><span class="n">path</span><span class="p">)</span><span class="o">.</span><span class="n">attr</span><span class="p">(</span><span class="err">{</span>
<a name="l-1854"></a>        <span class="n">fill</span><span class="o">:</span> <span class="n">fillColor</span><span class="o">,</span>
<a name="l-1855"></a>        <span class="n">stroke</span><span class="o">:</span> <span class="n">strokeColor</span><span class="o">,</span>
<a name="l-1856"></a>        <span class="s1">&#39;stroke-width&#39;</span><span class="o">:</span> <span class="m">3</span>
<a name="l-1857"></a>      <span class="p">}</span><span class="o">)</span><span class="nc">.hover</span><span class="o">(</span><span class="nt">hoverFunction</span><span class="o">)</span><span class="nc">.click</span><span class="o">(</span><span class="nt">clickFunction</span><span class="o">);</span>
<a name="l-1858"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1859"></a>
<a name="l-1860"></a>    <span class="nt">DonutSegment</span><span class="nc">.prototype.select</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1861"></a>      <span class="n">if</span> <span class="p">(</span><span class="o">!</span><span class="n">this</span><span class="o">.</span><span class="n">selected</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1862"></a>        <span class="n">this</span><span class="o">.</span><span class="n">seg</span><span class="o">.</span><span class="n">animate</span><span class="p">(</span><span class="err">{</span>
<a name="l-1863"></a>          <span class="n">path</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">selectedPath</span>
<a name="l-1864"></a>        <span class="p">}</span><span class="o">,</span> <span class="nt">150</span><span class="o">,</span> <span class="s1">&#39;&lt;&gt;&#39;</span><span class="o">);</span>
<a name="l-1865"></a>        <span class="nt">this</span><span class="nc">.arc.animate</span><span class="o">(</span><span class="p">{</span>
<a name="l-1866"></a>          <span class="nb">opacity</span><span class="o">:</span> <span class="m">1</span>
<a name="l-1867"></a>        <span class="p">}</span><span class="o">,</span> <span class="nt">150</span><span class="o">,</span> <span class="s1">&#39;&lt;&gt;&#39;</span><span class="o">);</span>
<a name="l-1868"></a>        <span class="nt">return</span> <span class="nt">this</span><span class="nc">.selected</span> <span class="o">=</span> <span class="nt">true</span><span class="o">;</span>
<a name="l-1869"></a>      <span class="err">}</span>
<a name="l-1870"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1871"></a>
<a name="l-1872"></a>    <span class="nt">DonutSegment</span><span class="nc">.prototype.deselect</span> <span class="o">=</span> <span class="nt">function</span><span class="o">()</span> <span class="p">{</span>
<a name="l-1873"></a>      <span class="n">if</span> <span class="p">(</span><span class="n">this</span><span class="o">.</span><span class="n">selected</span><span class="p">)</span> <span class="err">{</span>
<a name="l-1874"></a>        <span class="n">this</span><span class="o">.</span><span class="n">seg</span><span class="o">.</span><span class="n">animate</span><span class="p">(</span><span class="err">{</span>
<a name="l-1875"></a>          <span class="n">path</span><span class="o">:</span> <span class="n">this</span><span class="o">.</span><span class="n">path</span>
<a name="l-1876"></a>        <span class="p">}</span><span class="o">,</span> <span class="nt">150</span><span class="o">,</span> <span class="s1">&#39;&lt;&gt;&#39;</span><span class="o">);</span>
<a name="l-1877"></a>        <span class="nt">this</span><span class="nc">.arc.animate</span><span class="o">(</span><span class="p">{</span>
<a name="l-1878"></a>          <span class="nb">opacity</span><span class="o">:</span> <span class="m">0</span>
<a name="l-1879"></a>        <span class="p">}</span><span class="o">,</span> <span class="nt">150</span><span class="o">,</span> <span class="s1">&#39;&lt;&gt;&#39;</span><span class="o">);</span>
<a name="l-1880"></a>        <span class="nt">return</span> <span class="nt">this</span><span class="nc">.selected</span> <span class="o">=</span> <span class="nt">false</span><span class="o">;</span>
<a name="l-1881"></a>      <span class="err">}</span>
<a name="l-1882"></a>    <span class="err">}</span><span class="o">;</span>
<a name="l-1883"></a>
<a name="l-1884"></a>    <span class="nt">return</span> <span class="nt">DonutSegment</span><span class="o">;</span>
<a name="l-1885"></a>
<a name="l-1886"></a>  <span class="err">}</span><span class="o">)(</span><span class="nt">Morris</span><span class="nc">.EventEmitter</span><span class="o">);</span>
<a name="l-1887"></a>
<a name="l-1888"></a><span class="err">}</span><span class="o">)</span><span class="nc">.call</span><span class="o">(</span><span class="nt">this</span><span class="o">);</span>
</pre></div>
</td></tr></table>
      </div>
    </div>
    <a href="#" class="back-to-top">Back to Top</a>
  
<div class="footer">
  <p>
    <ul>
      <li><a href="/about/">About</a></li>
      <li><a href="/api/">Developers</a></li>
      <li><a href="http://www.boyter.org/category/searchcode/">Updates</a></li>
      <li><a href="/spdx/">SPDX Search</a></li>
      <li><a href="https://searchcodeserver.com/">searchcode server</a></li>
    </ul>
  </p>
  <p>
  </p>

<p>
  <!-- Begin MailChimp Signup Form -->
  Subscribe to the searchcode newsletter
<div id="mc_embed_signup">
<form action="//searchcode.us13.list-manage.com/subscribe/post?u=bfcb89abd82d48825bbd1270f&amp;id=450cd94d81" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
<div class="mc-field-group">
  <input type="email" value="" placeholder="Your email..." name="EMAIL" class="required email" id="mce-EMAIL">
  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button btn btn-xs btn-primary">
</div>
  <div id="mce-responses" class="clear">
    <div class="response" id="mce-error-response" style="display:none"></div>
    <div class="response" id="mce-success-response" style="display:none"></div>
  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_bfcb89abd82d48825bbd1270f_450cd94d81" tabindex="-1" value=""></div>
    </div>
</form>
</div>
<!--End mc_embed_signup-->
</p>


  <p>searchcode is proudly Made in Sydney | &copy; searchcode 2016</p>
  <script async src="/static/script.js"></script>
  <script async src="/static/jquery.nouislider.min.js"></script>
  <script async src="/static/bootstrap/js/bootstrap.min.js"></script>
  <script async src="/static/typeahead.bundle.min.js"></script>
</div>
</div> 

<script>
(function() {
var dc = document.createElement('script');
dc.type = 'text/javascript'; dc.async = true;
dc.src = '//portfold.com/code/1/';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(dc, s);
})();
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-23451493-1', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>