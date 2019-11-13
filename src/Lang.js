class Lang {

    zh_CN={
        project:{
            title:"스마트 컨트랙트",
            totalSupply:"발행량 (ACES)",
            contractAddress:"컨트랙트 주소",
            balanceSero:"현재잔액 (AIPP)",
            balanceAsnow:"현재잔액 (ACES)",
            rate:"환전 비율 (AIPP / ACES)",
        },

        account:{
            title:{
                utxo:"지갑계정",
                contract:"컨트랙트 계정",
                swith:"잔액 (AIPP)",
                balanceSero:"잔액 (ACES)",
                balanceAsnow:"잔액 (ACES)",
                estimatedTotal:"예상 총수익(AIPP)",
                dayIncome:"당일반환비율",
                staticIncome:"당일수익반환 (AIPP)",
                withdraw:"인출 가능 현금액 (AIPP)",
                detail:"상세",
                id:"상세",
                referId:"추천인 번호",
                areaId:"대구역 번호",
                totalInvest:"원금",
                profitLevel:"수익 배수",
                latestTime:"최신 수익 시간",
                totalReturn:"현재반환 총수(AIPP)",
                totalReturnDay:"당일 반환 총수(AIPP)",
                recommend:"하급인원수",
                ticket:"당일사용가능(ACES)",
                staticIncomeTips:"오늘의 데일리 보너스 수익은 이미 현금 인출 가능 계좌에 지불되었다.",
                staticIncomeTips2:"촉발 수익 을 인출 계좌에.",
                investDetail:"투자상세",
                myIncome:"나의 업적",
                areaTotal:"단체실적",
                areaOtherTotal:"실적총합（단체 미포함）",

                staticReward:"수익반환",
                recommendReward:"추천상",
                nobilityReward:"스타급상",
                vipReward:"VIP상",
                viewCode:"스마트 컨트랙트 보기",

            },
            button:{
                deposit:"충전",
                buy:"환전ACES",
                invest:"투자",
                buyTicket:"충전ACES",
                trigger:"촉발 수익",
                withdraw:"인출",
                close:"닫기",
                copy:"복사",
            },
            modal:{
                deposit:{
                    title:"충전",
                    copy:"복사",
                },

                buyAsnow:{
                    title:"환전ACES",
                    amount:"수량 (AIPP)",
                    amountPlace:"수량입력",
                    rate:"환전 비율",
                    exchange:"환전",
                    password:"계정 암호",
                    passwordPlace:"암호 입력",
                },

                invest:{
                    title:"투자",
                    referId:"추천인번호",
                    amount:"투자금액",
                    amountTips:"최소 투자금액100 AIPP",
                    ticket:"티켓",
                    availableAIPP:"사용 가능한 잔액",
                    availableAsnow:"사용 가능한ACES",
                    availableExchange:"최대 태환 가능",
                    total:"미지급합계",
                    estimate:"예상 수익",
                    password:"계정 암호",
                    passwordPlace:"암호 입력",
                },

                buyTicket:{
                    title:"충전ACES",
                    amount:"수량 (ACES)",
                    amountPlace:"수량입력",
                    password:"계정 암호",
                    passwordPlace:"암호 입력",
                    availableAsnow:"사용 가능한ACES",
                    availableExchange:"태환가능",
                },
                trigger:{
                    password:"암호 입력",
                    passwordPlace:"암호 입력",
                },

                withdraw:{
                    password:"암호 입력",
                    passwordPlace:"암호 입력",
                    tips:"* 인출액은 UTXO 계정으로 직접 인출될 것이다.",
                },
            },
        },
        toast:{
            lessAmount:"AIPP잔액잔액이 이번 거래에 지불하기에 부족하다.",
            lessTicket:"현재 사용 가능한 ACES가 부족하므로, 먼저 ACES충전 하십시오.",
            lessAsnow:"지갑 계좌에 사용 가능한 ACES가 부족하니, 먼저 ACES로 교환해 주세요.",
            minInvest:"최소 투자금액100AIPP.",
            tx:"거래 제출이 성공하여 , 블록 패킹 거래를 기다리고, 거래하시:",
            copySuccess:"카피 성공!",

        }
    };

    en_US={
        project:{
            title:"Contract Info",
            totalSupply:"Total Supply (ACES)",
            contractAddress:"Contract Address",
            balanceSero:"Current Balance (AIPP)",
            balanceAsnow:"Current Balance (ACES)",
            rate:"Exchange Rate (AIPP / ACES)",
        },

        account:{
            title:{
                utxo:"Wallet Account",
                contract:"Contract Account",
                swith:"Switch Account",
                balanceSero:"Balance (AIPP)",
                balanceAsnow:"Balance (ACES)",
                estimatedTotal:"Estimated Total Income (AIPP)",
                dayIncome:"Return rate on the day",
                staticIncome:"Static Return (AIPP)",
                withdraw:"Withdrawal Account (AIPP)",
                detail:"Detail",
                id:"ID",
                referId:"Refer ID",
                areaId:"Large Area ID",
                totalInvest:"Total Invest",
                profitLevel:"Profit Level",
                latestTime:"Latest Share Time",
                totalReturn:"Total Return",
                totalReturnDay:"Total return on the day (AIPP)",
                recommend:"Recommend Number",
                ticket:"Available (ACES)",
                staticIncomeTips:"Your income have been paid to the withdrawal account.",
                staticIncomeTips2:"Trigger to withdrawal account. ",
                investDetail:"Invest Info",
                myIncome:"My performance",
                areaTotal:"Regional performance",
                areaOtherTotal:"Total performance (excluding the large region)",

                staticReward:"Static",
                recommendReward:"Recommend",
                nobilityReward:"Nobility",
                vipReward:"VIP",
                viewCode:"View Smart Contract",
            },
            button:{
                deposit:"Deposit AIPP",
                buy:"Exchange ACES",
                invest:"Invest",
                buyTicket:"Deposit ACES",
                trigger:"Trigger Income",
                withdraw:"Withdraw",
                close:"Close",
                copy:"Copy",
            },
            modal:{
                deposit:{
                    title:"Deposit",
                    copy:"COPY",
                },

                buyAsnow:{
                    title:"Exchange ACES",
                    amount:"Amount (AIPP)",
                    amountPlace:"Input Amount",
                    rate:"Exchange Rate",
                    exchange:"Exchange",
                    password:"Password",
                    passwordPlace:"Input Password",
                },
                buyTicket:{
                    title:"Deposit ACES",
                    amount:"Amount (ACES)",
                    amountPlace:"Input Number",
                    password:"Password",
                    passwordPlace:"Input Your Password",
                    availableAsnow:"Available ACES",
                    availableExchange:"Exchange",
                },
                invest:{
                    title:"Invest",
                    referId:"Refer ID",
                    ticket:"Tickets",
                    amount:"Invet Amount",
                    amountTips:"At least invest 100 AIPP",
                    availableAIPP:"Available Blance",
                    availableAsnow:"Available ACES",
                    availableExchange:"Max Exchange",
                    total:"Total",
                    estimate:"Estimated Return",
                    password:"Password",
                },

                trigger:{
                    password:"Password",
                },

                withdraw:{
                    password:"Password",
                    tips:"* This is the withdrawal of the amount to the UTXO account.",
                },
            },
        },
        toast:{
            lessAmount:"The balance is not enough to pay for this transaction.",
            lessTicket:"There are not enough tickets, please depost the asnow first.",
            minInvest:"Invest Amount at least 100 AIPP.",
            lessAsnow:"Insufficient ACES available in the wallet account, please exchange ACES first",
            tx:"The transaction was submitted successfully, waiting for the block to be packaged, and the transaction hash: ",
            copySuccess:"Copy to clipboard successfully! ",
        },
    }
}

export default Lang
