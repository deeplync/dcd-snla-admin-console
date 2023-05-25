#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 7000
EXPOSE 7001
ENV ASPNETCORE_URLS=https://+;http://+
ENV ASPNETCORE_HTTPS_PORT=7001
ENV ASPNETCORE_Kestrel__Certificates__Default__Password="og@123" 
ENV ASPNETCORE_Kestrel__Certificates__Default__Path=/https/aspnetapp.pfx 
ENV ASPNETCORE_ENVIRONMENT=”development”
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["dcd-snla-admin-console.csproj", "."]
RUN dotnet restore "./dcd-snla-admin-console.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "dcd-snla-admin-console.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "dcd-snla-admin-console.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "dcd-snla-admin-console.dll"]